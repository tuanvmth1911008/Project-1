var express = require("express");

var app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("Server is running..");
});

app.use(express.static('public'));

app.set("view engine","ejs");

var mssql = require("mssql");//goi module de su dung
const config = {
    server: "210.245.95.62",
    user: "sa",
    password: "z@GH7ytQ",
    database: "T1911E"
};
mssql.connect(config,function (err) {
    if (err) console.log(err);
});
var db = new mssql.Request();
var bodyParser = require("body-parser");

app.use(bodyParser.json());//lay duoc du lieu dung form json
app.use(bodyParser.urlencoded({extended:true}));
// var menu_sql = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
// menu_sql += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";
// db.query(menu_sql,function (err,rows) {
//     if (err) console.log(err)
//     else {
//         menu.menu = rows.recordsets[0]
//         menu.submenu = rows.recordsets[1]
//     }
// });
app.get("/",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";

    sql_text += "SELECT TOP 10 * FROM postclt WHERE CategoryID = 6 OR CategoryID = 7 ORDER BY PostDateTime DESC;";
    sql_text += "SELECT TOP 10 * FROM postclt WHERE CategoryID = 2 OR CategoryID = 3 OR CategoryID = 4 ORDER BY PostDateTime DESC;";
    sql_text += "SELECT TOP 10 * FROM postclt WHERE CategoryID = 8 ORDER BY PostDateTime DESC;";
    sql_text += "SELECT TOP 5 * FROM DNBC_Posts ORDER BY PostDateTime DESC;";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("homepage",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],

                politic_lastest: rows.recordsets[2],
                business_lastest: rows.recordsets[3],
                world_lastest: rows.recordsets[4],
                trending: rows.recordsets[5],
            })
        }
    });
});
app.get("/categories/:CategoryID",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";

    var id = req.params.CategoryID;
    sql_text += "SELECT * FROM DNBC_Categories WHERE CategoryID = "+id+";";
    sql_text += "SELECT * FROM postclt WHERE CategoryID = "+id+" ORDER BY PostDateTime DESC;";
    sql_text += "SELECT TOP 5 * FROM postclt WHERE CategoryID = "+id+" ORDER BY PostDateTime DESC;";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("categories",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],

                category: rows.recordsets[2],
                post: rows.recordsets[3],
                trending: rows.recordsets[4]
            })
        }
    });
});
app.get("/post/:PostID",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";

    var id = req.params.PostID;
    sql_text += "SELECT * FROM postclt WHERE PostID = "+id+";";
    sql_text +="select * from postclt where PostID != "+id+" and CategoryID in (SELECT CategoryID from postclt where PostID = "+id+");"
    sql_text += "SELECT TOP 5 * FROM DNBC_Posts ORDER BY PostDateTime DESC;";
    sql_text += "SELECT * FROM DNBC_Comments WHERE PostID = "+id+";";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("post",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],

                post: rows.recordsets[2],
                mayLike:rows.recordsets[3],
                trending: rows.recordsets[4],
                comment: rows.recordsets[5],
            })
        }
    });
});
app.post("/comment",function (req,res) {
    var id = req.body.PostID;
    var username = req.body.UserName;
    var email = req.body.UserEmail;
    var comment = req.body.CommentContent;

    var sql_text ="INSERT INTO DNBC_Comments(UserName,UserEmail,CommentContent,PostID) VALUES(N'"+username+"','"+email+"','"+comment+"','"+id+"')";
    db.query(sql_text,function (err,rs) {
        if (err) res.send(err.message);
        else return res.redirect("/post/"+id+"");
    })
})
app.get("/about-us",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("about-us",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],
            })
        }
    });
});
app.get("/contact-us",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("contactus",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],
            })
        }
    });
});

app.get("/advertisement",function (req,res) {
    var sql_text = "SELECT * FROM DNBC_Categories WHERE ParentID = 0;";
    sql_text += "SELECT * FROM DNBC_Categories WHERE ParentID = 1 OR ParentID = 5 OR ParentID = 9;";
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else {
            res.render("advertisement",{
                menu:rows.recordsets[0],
                submenu:rows.recordsets[1],
            })
        }
    });
});

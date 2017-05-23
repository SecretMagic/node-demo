var express = require("express");

var app = express();

app.set("view engine", "ejs");

var mydb = [
    {
        "title": "0号新闻",
        "timer": "2017年5月23号",
        "content": "<p>内容</p><p>内容</p>"
    },{
        "title": "1号新闻",
        "timer": "2017年5月23号",
        "content": "<p>内容</p><p>内容</p>"
    },{
        "title": "2号新闻",
        "timer": "2017年5月23号",
        "content": "<p>内容</p><p>内容</p>"
    },{
        "title": "3号新闻",
        "timer": "2017年5月23号",
        "content": "<p>内容</p><p>内容</p>"
    }
]

app.get("/news/:id", function (req, res) {
    var id = parseInt(req.params.id);
    // res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.render("content", mydb[id]);
})

app.listen(3000);
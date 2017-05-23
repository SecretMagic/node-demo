var express = require("express");

var app = express();

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

app.use(express.static("./public"));

app.get("/news", function (req, res) {
    res.json(mydb);
})

app.listen(3000);
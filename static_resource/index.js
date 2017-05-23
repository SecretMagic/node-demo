var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;

    var extname = path.extname(pathname);

    if (pathname.indexOf(".") === -1) {
        pathname += "/index.html";
    }

    var fileUrl = "./" + path.normalize("static/" + pathname);

    fs.readFile(fileUrl, function (err, data) {
        if (err) {
            fs.readFile("./static/404.html", function (err, data) {
                res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(data);
            });
            return;
        }

        getMime(extname, function (mime) {
            res.writeHead(200, {"Content-Type": getMime(extname)});
            res.end(data);
        })
    });
});

server.listen(3000);

function getMime (extname,callback) {
    fs.readFile("./mime.json", function (err, data) {
        var mimeObj = JSON.parse(data);
        var mime = mimeObj[extname] || "text/plain";
        callback(mime);
    });
}
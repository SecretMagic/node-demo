var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    sd = require("silly-datetime"),
    fs = require("fs"),
    path = require("path");

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile("./index.html", function (err, data) {
            if (err) {
                console.log(err);
            }
            res.end(data);
        }) 
    }else if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

        var form = new formidable.IncomingForm();

        form.uploadDir = "./uploads";

        form.parse(req, function(err, fields, files) {
            var time = sd.format(new Date(), "YYYYMMDDHHmmss");
            var ran = parseInt(Math.random() * 100000);
            var extname = path.extname(files.upload.name);

            var oldPath = __dirname + "/" + files.upload.path;
            var newPath = __dirname + "/uploads/" + time + "_" + ran + extname;

            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    console.log("改名失败");
                    return;
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("success");
            })
        });
    }else {
        res.end("404");
    }  
})

server.listen(3000, "127.0.0.1");
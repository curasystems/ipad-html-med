var http = require('http')
var static = require('node-static')
var port = process.argv[2] || 8888

//
// Create a node-static server instance to serve the './public' folder
//

process.on('uncaughtException', function(err) {
    util.log (err);
});

/*

var file = new(static.Server)('.');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        response.setHeader('content-type', 'video/mp4');
        file.serve(request, response);
    });
}).listen(parseInt(port, 10));
*/
var libpath = require('path'),
    http = require("http"),
    fs = require('fs'),
    url = require("url"),
    mime = require('mime'),
    util = require('util');

var path = ".";

http.createServer(function (request, response) {

    var uri = url.parse(request.url).pathname;
    var filename = libpath.join(path, uri);

    libpath.exists(filename, function (exists) {

        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        fileStat = fs.statSync(filename);
        if (fileStat.isDirectory()) {
            filename += '/index.html';
            fileStat = fs.statSync(filename);
        }

        var total = fileStat.size;
        var type = mime.lookup(filename);


        if(request.headers['range'])
        {
            var range = request.headers.range; 
            
            var parts = range.replace(/bytes=/, "").split("-"); 
            var partialstart = parts[0]; 
            var partialend = parts[1]; 

            var start = parseInt(partialstart, 10);
            var end = partialend ? parseInt(partialend, 10) : total-1;
            var chunksize = (end-start)+1;

            console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize + '(file:'+total+')');

            var file = fs.createReadStream(filename, {start: start, end: end});
            response.writeHead(206,
                {   
                    "Content-Range": "bytes " + start + "-"+ end + "/" + total,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": type
                }); 

            file.pipe(response);
        }
        else
        {
            console.log('ALL: ' + total);
            response.writeHead(200, { 'Content-Type': type });
            file = fs.createReadStream(filename);
            file.pipe(response);
        }            
    
    });
}).listen(parseInt(port, 10));


console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
var static = require('node-static')
var httpProxy = require('http-proxy').httpProxy

var fileServer = new static.Server('build/release/app/client');

require('http').createServer(function (request, response) {
    // console.log(request)
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(8080);
const http = require('http');
//to create a server and stored it in server variable
const server = http.createServer(function(req,res){
    res.end("hello World")
})

server.listen(3000);
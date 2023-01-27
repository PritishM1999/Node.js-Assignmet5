var http = require("http");
const httpServer = http.createServer(handleServer);

module.exports = httpServer;var http = require("http");

const obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
}

function handleServer(req, res) {
    const path=req.url;
    if (req.method == "POST" && path == '/welcome') {
        res.writeHead(200,{"Content-type":"text/plain"})
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if (req.method == "POST" && path == '/contact') {
        res.writeHead(200,{"Content-type":"text/plain"})
        res.write(`{phone:'18602100000', \n email: 'guestcaredominos@jublfood.com' }`);
        res.end();
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("Page not found");
        res.end();
    }
}
httpServer.listen(8081,()=>{console.log("Server is up at 8081")})
module.exports = httpServer;




// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
    
  
// }

// module.exports = httpServer;

// Server.listen(8084, ()=> console.log("Server is up at port 8084"))

//----------------------
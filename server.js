const http = require('http');
const PORT = 3000;

const server = http.createServer((req , res) => {

    
    
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello there first server is running successfuly');

});


server.listen(PORT,() => {
    console.log(`Server is running at Port: ${PORT}`)
})

import fs from 'fs/promises'
import  url from 'url'
import path from 'path'
import http from 'http';
const PORT = process.env.PORT;

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log("directory name or folder name : ",__dirname , 'file name :', __filename)

const server = http.createServer(async(req , res) => {

    try {

    if(req.method === 'GET'){

        let filePath;
        if(req.url === '/'){
        filePath = path.join(__dirname,'public','index.html')
            
            
            // res.writeHead(200, {'Content-Type':'text/html'});
            // res.end('<h1>hello this is Home Page</h1>');
    
        }
        else if (req.url === '/about'){
        filePath = path.join(__dirname,'public','about.html')

            // res.writeHead(200, {'Content-Type':'text/html'});
            // res.end('<h1>hello this is About Page</h1>');
        }
        else {
            throw new Error('Not Found')
            // res.writeHead(404, {'Content-Type':'text/html'});
            // res.end('<h1>Page Not Found</h1>');
     
       }

       const data = await fs.readFile(filePath);
       res.setHeader('Content-Type' , 'text/plain');
       res.write(data);
       res.end()
    }
    else{
        throw new Error('Method Not Allowed')
    }
        
    } catch (error) {
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('Server Error');
    }





   



    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end('<h1>hello there first server is running successfuly</h1>');

    // res.end(JSON.stringify({message: 'Server ERROR'}));
   
    // console.log(req.url);
    // console.log(req.method)
            
    
    // res.writeHead(200, {'Content-Type':'text/plain'});
    // res.end('hello there first server is running successfuly');

});




server.listen(PORT,() => {
    console.log(`Server is running at Port: ${PORT}`)
})

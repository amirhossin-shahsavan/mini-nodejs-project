const http = require('http');
const products = require('./data/products.json')
const PORT = 3000;
const server = http.createServer((req,res)=>{
    if(req.url=='/api/products'){
        res.writeHead(200,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify(products))
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify({message:'Route Not Find'}))
        res.end()
    }
    
}).listen(PORT)
console.log(`server is run ${PORT} http://localhost${PORT} `);


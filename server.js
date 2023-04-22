const http = require('http');
const products = require('./data/products.json');
const ProductsController = require('./controllers/product.controllers');
const PORT = 3000;
const server = http.createServer((req,res)=>{
    if(req.url=='/api/products'){
        ProductsController.get(req,res);
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify({message:'Route Not Find'}))
        res.end()
    }
    
}).listen(PORT)
console.log(`server is run ${PORT} http://localhost${PORT} `);


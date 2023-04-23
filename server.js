const http = require('http');
const products = require('./data/products.json');
const ProductsController = require('./controllers/product.controllers');
const ErrorHandler = require('./controllers/errorHandler.conroller');
const PORT = 3000;
const server = http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url=='/api/products' && req.method == "GET"){
        ProductsController.get(req,res);

    }else if(req.url.match(/\/api\/products\/[0-9]+/) && req.method == "GET"){
        ProductsController.getById(req,res);
    }else if(req.url == "/api/products" && req.method == "POST"){
        ProductsController.create(req,res);
    }
    else{
        ErrorHandler.Notfind(res);
    }
    
}).listen(PORT)
console.log(`server is run ${PORT} http://localhost${PORT} `);

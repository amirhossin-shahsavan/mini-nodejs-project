const ProductsModel = require("../model/product.model");

async function get(req,res){
    try{
        const products = await ProductsModel.find();
        res.writeHead(200,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify(products))
        res.end()
    }catch(error){
        
    }
}

async function getById(req,res){
    try{
        const [,,,id] = req.url.split("/")
        const products = await ProductsModel.findById(id);
        res.writeHead(200,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify(products))
        res.end()
    }catch(error){
        
    }
}


 const ProductsController = {
    get,
    getById
 }
module.exports = ProductsController;
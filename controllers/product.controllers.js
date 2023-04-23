const ProductsModel = require("../model/product.model");
const ErrorHandler = require("./errorHandler.conroller");

async function get(req,res){
    try{
        const products = await ProductsModel.find();
        res.writeHead(200,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify(products))
        res.end()
    }catch(error){
        console.log(error);
    }
}

async function getById(req,res){
    try{
        const [,,,id] = req.url.split("/")
        const products = await ProductsModel.findById(id);
        if(!products){
            ErrorHandler.Notfind(res)
        }
        res.writeHead(200,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify(products))
        res.end()
    }catch(error){
        console.log(error);
    }
}

async function create(req,res){
    try{
        await ProductsModel.Creat({
            id :Date.now(),
            name : "test",
            description : "new discription",
            price : 234.00
        });
        res.writeHead(201,{'Content-Type':'application/json'}); 
        res.write(JSON.stringify({message:'create sucssesfully '}))
        res.end()
    }catch(error){
        console.log(error);
    }
}

 const ProductsController = {
    get,
    getById,
    create
 }
module.exports = ProductsController;
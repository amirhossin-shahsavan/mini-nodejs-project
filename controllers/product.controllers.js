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
        let body = '';
        req.on('data' , (chunk) =>{
            body += chunk.toString();
        })
        req.on('end' , async ()=>{
            const product = {id:Date.now() , ...JSON.parse(body)}
            const result = await ProductsModel.Creat(product);
            res.writeHead(201,{'Content-Type':'application/json'}); 
            res.write(JSON.stringify(result))
            res.end()
        })
    }catch(error){
        console.log(error);
    }
}

async function update(req,res){
    try{
        const [,,,id] = req.url.split("/")
        let body = '';
        req.on('data' , (chunk) =>{
            body += chunk.toString();
        })
        req.on('end' , async ()=>{
            const ParsedBody = {...JSON.parse(body)}
            const Product = await ProductsModel.findById(id)
            if(!Product){ErrorHandler.Notfind()}
            else{

                const result = await ProductsModel.Update(id , ParsedBody);
                res.writeHead(201,{'Content-Type':'application/json'}); 
                res.write(JSON.stringify(result))
                res.end()}
        })
    }catch(error){
        console.log(error);
    }
}

async function deleted(req,res){
    try{
        const [,,,id] = req.url.split("/")
        const product = await ProductsModel.findById(id);
        if(!product){
            ErrorHandler.NotfindProduct(res)
        }else{
            const result = await ProductsModel.Delete(id);
            res.writeHead(200,{'Content-Type':'application/json'}); 
            res.write(JSON.stringify(result))
            res.end()
        }
    }catch(error){
        console.log(error);
    }
}

 const ProductsController = {
    get,
    getById,
    create,
    update,
    deleted
 }
module.exports = ProductsController;
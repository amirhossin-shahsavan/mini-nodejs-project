const products = require('./../data/products.json')
async function find(){
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
}

async function findById(id){
    return new Promise((resolve,reject)=>{
        resolve(products.find(product => product.id == id));
    })
}

async function Creat(product){
    return new Promise((resolve,reject)=>{
        products.push(product);
    })
}

const ProductsModel = {
    find,
    findById,
    Creat
}
module.exports = ProductsModel;
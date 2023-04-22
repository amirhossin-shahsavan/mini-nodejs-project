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

const ProductsModel = {
    find,
    findById
}
module.exports = ProductsModel;
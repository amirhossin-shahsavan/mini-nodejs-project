const products = require('./../data/products.json')
async function find(){
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
}

const ProductsModel = {
    find
}
module.exports = ProductsModel;
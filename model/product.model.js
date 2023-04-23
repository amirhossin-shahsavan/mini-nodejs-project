const products = require('./../data/products.json');
const fs = require('fs');

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
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err)=>{
            if(err){reject(err)}
            else{resolve({message:'new product created' , data: product})}
        })
    })
}

const ProductsModel = {
    find,
    findById,
    Creat
}
module.exports = ProductsModel;
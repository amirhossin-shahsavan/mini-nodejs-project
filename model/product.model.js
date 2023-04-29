const products = require('./../data/products.json');
const fs = require('fs');
const ConnectToMongoDB = require('./../utils/mongoconnection')
const { ObjectId } = require('mongodb')
const ProductCollection = 'product'

async function find(){
    const db = await new ConnectToMongoDB().Get();
    return new Promise(async(resolve,reject)=>{
        const products = await db.collection(ProductCollection).find({} , {sort :{ _id:-1}}).toArray();
        resolve(products);
    })
}

async function findById(id){
    const db = await new ConnectToMongoDB().Get();
    return new Promise(async(resolve,reject)=>{
        const product = await db.collection(ProductCollection).findOne({_id :new ObjectId(id)}) 
        resolve(product);
    })
}

async function Creat(product){
    const db = await new ConnectToMongoDB().Get();
    return new Promise(async(resolve,reject)=>{
       const result = await db.collection(ProductCollection).insertOne(product);
       resolve(result);
    })
}

async function Update(id , payload){
    const db = await new ConnectToMongoDB().Get();
    return new Promise(async(resolve,reject)=>{
        const result = await db.collection(ProductCollection).UpdateOne({_id: new ObjectId(id)} , {
            $set : {...product}
        });
       resolve(result);
    })
}

async function Delete(id){
    const db = await new ConnectToMongoDB().Get();
    return new Promise(async(resolve,reject)=>{
        const result = await db.collection(ProductCollection).DeleteOne({_id: new ObjectId(id)});
       resolve(result);
    })
}

const ProductsModel = {
    find,
    findById,
    Creat,
    Update,
    Delete
}
module.exports = ProductsModel;
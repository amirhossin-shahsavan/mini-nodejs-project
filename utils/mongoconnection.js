const {MongoClient} = require('mongodb');

class ConnectToMongoDB{
    #DB_URI = 'mongodb://127.0.0.1/mongodb-tutorials';
    #db = null;
    async #connect(){
        try{
            let client = new MongoClient(this.#DB_URI);
            let db = client.db();
            return db;
        } catch(error){
            console.log(error.message);
        }
    }

    async Get(){
        try{
            if(this.#db){
                console.log('DB connection is already alive');
                return this.#db;
            }
            this.#db = await this.#connect();
            return this.#db;

        }catch(error){
            console.log(error.message);
        }
    }
}

// async function main(){
//     const db = await new ConnectToMongoDB().Get();
//     const users = await db.collection('user').find({}).toArray();
//     console.log(users);
// }

//main();


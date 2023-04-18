import mongoose from 'mongoose'

 async function Connection(username, password){

    const URL = `mongodb://${username}:${password}@ac-m3qnxpb-shard-00-00.u9e1gcy.mongodb.net:27017,ac-m3qnxpb-shard-00-01.u9e1gcy.mongodb.net:27017,ac-m3qnxpb-shard-00-02.u9e1gcy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2mfydj-shard-0&authSource=admin&retryWrites=true&w=majority`
    //mongodb is an external entity , if any issue occurs that need to be handle, so we use exception for connection to handle error to avoid app crash 
    try{  

        // mongoose default function to connecting database
        // connect() takes two arguments URL and an Object

        // mongoose.connect(URL, { useUnifiedTopology:true, useNewUrlParser:true }); //it returns a promise so make it async await
        await mongoose.connect( URL, { useUnifiedTopology:true, useNewUrlParser:true }); 
        console.log("database connected successfully");

    }catch(error){
        console.log(`error while connecting database ${error}`)
    }

}
export default Connection; 
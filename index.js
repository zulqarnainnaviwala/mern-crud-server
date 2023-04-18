//old syntax
// const express =require("express");

//latest node version will understand this syntax , but we need to add "type": "module" in package.json otherwsie will  not be understandable 
import express from "express";
//importing DB Connetion
import Connection from "./database/dbConfig.js";
//import dot env to get database credentials or other configs and pass 
import dotenv from 'dotenv'
//importing backend router  
// import Routes from "./routes/route.js";
import router from "./routes/route.js";
//cors to overcome cross origin problem
import cors from "cors"
//importing bodyParser to parse the object coming in post api of req.body
import bodyParser from "body-parser";


const app = express();

app.use(cors()); 

app.use(bodyParser.json( { extended:true }));
//on more thing , URL parsing which decodes some encoded URLs (e.g sometimes we are getting URLs as domain.com/add%9%user )
app.use(bodyParser.urlencoded( { extended:true } ));

app.use('/',router);

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password); 
 
const PORT = 8000;   

app.listen(PORT, ()=>console.log(`server is successfully running on port ${PORT}`));
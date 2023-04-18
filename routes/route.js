 import express from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/userController.js";


 //to handle routes on backend , we will be using Router function in express
 const router = express.Router(); 

 router.post(
    '/add',
    // to keep it just routes remove below callback and handle controller actions , import here above and call
    // ()=>{console.log("hello")}
    addUser
 )
 router.get('/all', getUsers);
 router.get('/:id', getUser);
//  router.post('/:id',editUser);
 router.put('/:id',editUser);
 router.delete('/:id',deleteUser);

 export default router; 
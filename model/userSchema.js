import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

// validation through schema , string me hi data ana chahye frontend se 
// mongoose.Schema({
//     name:String,
//     username:String,
//     email:String,
//     phone:String
// })


const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String ,
});

//we are going to use autoIncrement as plugin , syntax below
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'User');
// userSchema.plugin(autoIncrement.plugin, {
//     model: 'User',
//     field: 'id',
//     startAt: 1,
//     incrementBy: 1
//   });


//.model takes to arguments (name of collection (in mySQL : table) , what needs to be stored )
// mongoose.model('user',userSchema);
const User  = mongoose.model('User',userSchema); 

export default User;

// npm i mongoose-auto-increment
// npm i --legacy-peer-deps mongoose-auto-increment
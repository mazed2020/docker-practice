import mongoose from "mongoose";

const UserShcema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const User=mongoose.model("User",UserShcema)

export default User

import User from "../model/user.model.js";

export const createUser = async(req,res)=>{
    // res.send("hello");
    const user= await User.create(req.body);
    await user.save();
    
     res.status(200).json({
         success:true,
         data:user
     })
}

export const userRead=async(req,res)=>{
    const user=await User.find();
    res.status(200).json({
        success:true,
        data:user
    })
}


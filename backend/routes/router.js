import express from "express";
import {createUser}  from "../controllers/user.controller.js";
import {userRead} from "../controllers/user.controller.js";
 
const router = express.Router();
 
router.route("/userRead").get(userRead);
router.post("/createUser",createUser
);
router.get("/",(req,res)=>{
    res.send("hello world");
})
 
export default router;
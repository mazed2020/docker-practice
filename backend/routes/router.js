import express from "express";
import { createUser}  from "../controllers/user.controller.js";
import {userRead,teasting} from "../controllers/user.controller.js";
 
const router = express.Router();
 
router.route("/userRead").get(userRead);
router.post("/createUser",createUser
);
router.get("/read",teasting);

 
export default router;
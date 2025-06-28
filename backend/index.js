import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
import router from "./routes/router.js";



const PORT=process.env.PORT || 5000

const app=express();
dotenv.config();
console.log(process.env.MONGO_URL);

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/user",router );

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})
 


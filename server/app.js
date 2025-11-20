import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello cfi student"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
})
import express from "express";
import connectTodb from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({ path: "./.env" })
const app=express();
const PORT = process.env.PORT || 8000;


connectTodb()


app.listen(PORT,()=>{
    console.log(`server is sarted at ${PORT}`)
})

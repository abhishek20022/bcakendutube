import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectTodb= async ()=>{


   try{
    const connectInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`,  
    {
        family: 4  // ✅ Yeh add karo
    }
     );

     console.log(
        `DB connected !! HOST: ${connectInstance.connection.host}`
     );

   }catch(err){
       console.log("database not conntect",err)
       process.exit(1)

   }

}

export default connectTodb;




import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb=async()=>{

try {

const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(()=>console.log("working"));


} catch (error) {
    

    console.log("Mongo db error", error);
     
    process.exit(1);
      
}



}



export default connectDb;
import mongoose from "mongoose";

let isConnected = false; 

export const connectToDB = async ()=>{
    mongoose.set("strictQuery",true)

    if (isConnected) {
        console.log(`MongoDB is already connected to`);
        return
        
    }

    try {
        
        await mongoose.connect("mongodb+srv://devshohanur:devshohanur@cluster0.ll0bzap.mongodb.net/?retryWrites=true&w=majority",{
            dbName: "share_prompt"
        })
        isConnected = true
        console.log(`mongoDB connected`);

    } catch (error) {
        console.log(error);
    }
}
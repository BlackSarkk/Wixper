import mongoose from "mongoose"


export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
        .then(console.log(`Connected to database`))
    } catch(err){
        console.log(`Error: ${err.message}`)
        process.exit(1)         // 1 means exit with failure && 0 means success 
    }
}
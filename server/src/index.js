import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./config/db.js";


const app = express();
app.use(express.json());
dotenv.config()


app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})


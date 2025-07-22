import express from "express";
import movieRoutes from "./routes/movies.js";
import connectDB from "./lib/db.js";


const app = express();
//connect db 
connectDB();
app.get('/',(req,res)=>{
    res.json({msg : "Hello!!!"})
});

//CLIENT -> MIDDLEWARE --> SERVER

app.use(express.json());

const PORT = 6969;
app.use("/movies",movieRoutes);


app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
});


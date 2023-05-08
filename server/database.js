import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("Connected to MongoDB Atlas")})
.catch((err)=>{console.log(err)});

// const database=mongoose.connection;
// database.on("error", console.error.bind(console, "connection error: "))
// database.once("open", ()=>{
//     console.log("Connected to database")
// })

// export default database;
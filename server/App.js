import express from 'express';
import cors from 'cors';
const app=express();
const port=process.env.PORT || 3001;
import './database.js'
import Signup from './Routes/Auth/Signup.js'
import Login from './Routes/Auth/Login.js';
import CreateNote from './Routes/Notes/CreateNote.js';

app.use(cors())
app.use(express.json())
app.use(Signup)
app.use(Login)
app.use(CreateNote)


app.listen(port, (req, res)=>{
    console.log("Server is running on port", port);
})


// app.get('/hi/:name', (req, res)=>{
//     console.log("Hello World Home Page");
//     res.send("Hello "+req.params.name+". We are glad to have you at our home page.");
// })

// async function main(){
//     // const mongoURL = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

//     const client = new MongoClient(mongoURL);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);






// import { Socket } from 'socket.io';
// import ip from 'ip';
// import os from 'os';
// import path, {dirname} from 'path'
// import { fileURLToPath } from 'url';
// import fs from 'fs'
// const File=fs.readFileSync('./public/test.html');
// const File2=fs.readFileSync('./test.html');
// const express=require('express')
// const app=express()

// const middleware=(req, res, next)=>{
//     console.log(req.url);
//     // res.send("Hello Middleware")
//     next();
    
// }
// app.use(middleware)
// app.use(Signup())
// Signup()

// app.get('/', (req, res)=>{
//     console.log("/ called");
//     res.send("/ called");
// })

// app.get('/signup', (req, res)=>{
//     console.log("signup 1");
//     res.send(Signup())
//     console.log("Signup Page");
//     // res.send("Signup Page");
// })

// app.get('/notes', (req, res)=>{
    // res.send(File.toString());
    // res.send(path.join(dirname(fileURLToPath(import.meta.url)), './public/test.html').toString());
// })
// app.get('/new', (req, res)=>{
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = dirname(__filename);
//     res.sendFile(path.join(__dirname, 'test.html'));
//     // res.sendFile(path.join(fs.__dirname, 'index.html'));
//     // res.send(File2.toString());
// })
// app.listen(port, (req, res)=>{
//     console.log("Server is running on port ", port);
    // const interfaces = os.networkInterfaces();
    // for(const name of Object.keys(interfaces)) {
    //     for(const net of interfaces[name]) {
    //         if(net.family === 'IPv4' && !net.internal) {
    //             if(net.address.startsWith('192.168')) {
    //                 console.log(net.address);
    //             }
    //         }
    //     }
    // }

    // console.log(os.networkInterfaces());
    // console.log("Your IP Addresss is: " + SocketAddress);
    // console.log(ip.address(name='Wi-Fi'));
// });



// const server=http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     if(req.url==='/'){
//         res.statusCode=200;
//         res.end('<h1>Home Page</h1>');
//     }
//     else if(req.url==='/about'){
//         res.statusCode=200;
//         res.end('<h1>About Page</h1>');
//     }
//     else if(req.url==='/notes'){
//         res.statusCode=200;
//         res.end(File.toString());
//     }
//     else{
//         res.statusCode=404;
//         res.end('<h1>Page not found</h1>');
//     }
    
//     // res.end(File);
// })
// server.listen(port, ()=>{
//     console.log('Server is running on port ', port);
// })

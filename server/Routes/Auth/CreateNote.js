import express from 'express'
const router = express.Router()
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import notes from '../../Model/NoteSchema.js'
dotenv.config()


// const verifyToken = async () => {
//     console.log("Inside verifyTokenFunction")
//     const authHeader=req.headers['authorization']
//     const token=authHeader && authHeader.split(' ')[1];
//     if(token==null){
//         console.log("Token not found. Login karlo")
//         return res.status(400).json({"message":"Token not found. Please Login first"})
//     }
//     const checkToken = await jwt.verify(token, process.env.jwt_secret)
//         .then(()=>next())
//         .catch((err)=>{console.log(err)})
//     // return checkToken;
// }


router.post('/create', (req, res) => {
    console.log("Pehla Padaav paar")
    const { heading, content } = req.body
    
    if (!(heading && content))
        return res.status(400).json({ "message": "Please fill in all the fields" })
    else {
        const newNote = new notes({
            heading: heading.trim(),
            content: content.trim(),
            // user
        })
        newNote.save()
            .then(() => {
                console.log('New Note Saved in database successfuly')
                return res.status(200).json({ "message": "Success" })
            })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({ "message": err })
            })
    }
})


// router.get('/create', verifyToken, (req, res, next) => {
//     next();
//     console.log("Hello Boyo Tokoenen")
//     res.status(200).json({"message":"Sucess"});
// })

export default router;
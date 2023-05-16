import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import notes from '../../Model/NoteSchema.js'
dotenv.config()


router.post('/savenotes', (req, res) => {
    const { heading, content } = req.body
    const user = req.headers['user']
    if (!(heading && content))
        return res.status(400).json({ "message": "Please fill in all the fields" })
    else {
        const newNote = new notes({
            heading: heading.trim(),
            content: content.trim(),
            user
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
router.post('/getnotes', (req, res) => {
    const jwtToken = req.headers['jwt']
    const decodedToken = jwt.decode(jwtToken);
    const user = decodedToken._id;
    console.log('User ID: ', user);

    notes.find({ user: user })
        .then((data) => {
            console.log(data)
            return res.status(200).json({ "message": "Success" , data})
        })
        .catch((err) => {
            return res.status(400).json({ "message": err })
        })
})

export default router;
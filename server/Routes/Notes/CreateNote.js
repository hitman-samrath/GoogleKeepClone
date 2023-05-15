import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
import notes from '../../Model/NoteSchema.js'
dotenv.config()


router.post('/', (req, res) => {
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

export default router;
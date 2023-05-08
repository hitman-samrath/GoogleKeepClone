import express from 'express'
import user from '../../Model/UserSchema.js'
import validator from 'email-validator'
import bcrypt from 'bcrypt'

const router = express.Router()


router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!(name && email && password)) {
        return res.status(400).json({ "message": "Please fill in all the fields" })
    }
    else if (!validator.validate(email)) {
        return res.status(400).json({ "message": "Please enter a valid email" })
    }
    else if (password.length < 6) {
        return res.status(400).json({ "message": "Password should be atleast 6 characters long" })
    }
    else {
        user.findOne({ email: email })
            .then((foundUser) => {
                if (foundUser)
                    return res.status(400).json({ "message": "User with this email already exists" })
                bcrypt.hash(password, 11)
                    .then((hashedPassword) => {
                        const newuser = new user({
                            name: name.trim(),
                            email: email.toLowerCase().trim(),
                            password: hashedPassword
                        })
                        newuser.save()
                            .then(() => {
                                console.log('User Data Saved in database successfuly')
                                return res.status(200).json({ "message": "Success" })
                            })
                            .catch((err) => {
                                console.log(err)
                                return res.status(400).json({ "message": err })
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                        return res.status(400).json({ "message": err })
                    })
            })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({ "message": err })
            })
    }
})



export default router
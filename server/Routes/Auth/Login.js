import express from 'express'
const router = express.Router()
import user from '../../Model/UserSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user._id }, process.env.jwt_secret, { expiresIn: '1d' })
    return token
}

router.post('/login',(req, res) => {
    const { email, password } = req.body
    if (!(email && password))
        return res.status(400).json({ "message": "Please fill in all the fields" })
    else {
        user.findOne({ email: email })
            .then((foundUser) => {
                if (!foundUser)
                    return res.status(400).json({ "message": "User with this email does not exist. Please signup first" })
                else {
                    bcrypt.compare(password, foundUser.password)
                        .then((correctPassword) => {
                            if (correctPassword) {
                                generateToken(foundUser)
                                    .then((token) => {
                                        // res.cookie('jwtToken', token, { httpOnly: true });
                                        return res.status(200).json({
                                            "message": "Success",
                                            "token": token
                                        });
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                        return res.status(400).json({ "message": err })
                                    })
                            }
                            else
                                return res.status(400).json({ "message": "Incorrect Password. Try Again" })
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.status(400).json({ "message": err })
                        })
                }
            })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({ "message": err })
            })
    }
})

export default router
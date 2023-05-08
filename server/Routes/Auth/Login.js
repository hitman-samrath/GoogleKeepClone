import express from 'express'
const router = express.Router()
import user from '../../Model/UserSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


// const isAuth = (req, res, next) => {
//     const token = req.headers.authorization
//     if (token) {
//         const onlyToken = token.slice(7, token.length)
//         jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
//             if (err) {
//                 return res.status(401).send({ message: 'Invalid Token' })
//             }
//             req.user = token
//             next()
//             return
//         })
//     }
//     else {
//         return res.status(401).send({ message: 'Token is not supplied' })
//     }
// }

const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user._id }, process.env.jwt_secret, { expiresIn: '1d' })
    return token
}
// const verifyToken=async (token)=>{
//     const checkToken=await jwt.verify(token, process.env.jwt_secret)
//     return checkToken;
// }

router.post('/', (req, res) => {
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
                                        // res.redirect('/create');
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
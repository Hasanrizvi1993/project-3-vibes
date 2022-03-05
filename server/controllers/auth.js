const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const db = require("../models")
const User = require("../models/User")


// REGISTER NEW USER
const register = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email})
    if (userFound) {
        res.status(400).json({
            status: 400, 
            message: "Email already exists! Login, or try another!"
        })
    } else {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const user = await User.create({
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email,
                password: hashedPassword,
            }) 
            res.status(201).json({
                status: 201, 
                message: "Account successfully registered!", 
                user
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: "Error in account creation!",
            })
        }
    }
}

    // LOGIN USER
    const login = async (req, res) => {
        const userFound = await User.findOne({ 
            email: req.body.email,
        })
        if (!userFound) {
            res.status(400).json({
                status: 400, 
                message: "There is no account with that email!",
                userFound: false,
            })
        } else {
        const validPassword = await bcrypt.compare(req.body.password, userFound.password)  
            if (validPassword) {

                const token = jwt.sign( { _id: userFound._id }, "VIBE$", {
                    expiresIn: "2h",
                })
                    res.status(201).json({
                    status: 201, 
                    message: "Login Successful!", 
                    token,
                    userFound
                })
            }
            else {
                res.status(400).json("invalid password")
            }
             
        }}

    








module.exports = {
    register, 
    login,
}
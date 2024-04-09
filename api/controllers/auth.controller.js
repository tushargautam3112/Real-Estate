import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req,res) => {
    const {username,email,password} = req.body
    // hashing the password will use bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)
    // create new user and to db
    console.log(hashedPassword)
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password: hashedPassword
        }
    })
    console.log(newUser)
    res.status(201).json({message: "User Created."})
}

export const login = (req,res) => {
    //db ops
}

export const logout = (req,res) => {
    //db ops
}
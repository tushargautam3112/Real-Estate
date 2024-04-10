import prisma from "../lib/prisma.js"

export const getUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "failed to get Users"})
    }
}
export const getUser = async (req, res) => {
    const id = req.params.id
    try{
        const user = await prisma.user.findUnique({
            where: {id}
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "failed to get the User"})
    }
}
export const updateUser = async (req,res) => {
    try{
        const id = req.params.id
        const tokenUserId = req.userId

        if(id != tokenUserId){
            red.status(403).json({message: "unauthorized to update profile"})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "failed to Update user"})
    }
}
export const deleteUser = async (req,res) => {
    try{

    } catch (err) {
        console.log(err)
        res.status(500).json({message: "failed to delete user"})
    }
}
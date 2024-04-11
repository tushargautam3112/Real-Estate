import jwt from 'jsonwebtoken'
export const needLogin = async (req,res) => {
    console.log(req.userId)

    res.status(200).json({message: "Authenticated"})
}
export const needAdmin = async (req,res) => {
    const token = req.cookies.token
    if(!token) return res.status(401).json({message: "Not Authenticated"})
    jwt.verify(token,process.env.JWT_SECRET_KEY, async(err, payload)=>{
        if(err) return res.status(403).json({message: "Invalid Token"})
        if(!payload.isAdmin){
            return res.status(403).json({message: "not authorized"})
        }
    })

    res.status(200).json({message: "Authenticated"})
}
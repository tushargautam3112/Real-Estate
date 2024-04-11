import express from "express";

import {
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    savePost,
} from "../controllers/user.controller.js" ;

import {verifyToken} from "../niddleware/verifyToken.js" ;

const router = express.Router();

router.get("/", getUser);
// router.get("/search/:id" , verifyToken ,getUser) ;
router.put("/:id" , verifyToken ,updateUser);
router.delete("/:id" , verifyToken ,deleteUserteUser);
router.post("/save" ,verifyToken ,savePost) ;
router.get("/profilePosts" , verifyToken ,profilePosts) ;


export default router ;
import express from "express"
import { needAdmin, needLogin } from "../controllers/test.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"
const router = express.Router()
// import { verifyToken } from "../middleware/verifyToken.js"

router.get("/need-login",verifyToken,needLogin)
router.get("/need-admin",needAdmin)

export default router
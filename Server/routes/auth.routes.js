
import Router from "express"
import * as authController from "../controller/auth.controller.js"
import {authMiddileware} from "../middleware/auth-middleware.js"



const router  = Router();


router.route("/register").post(authController.signUpUser)
router.route("/login").post(authController.loginUser)
router.route("/logout").post(authController.userLogout)
router.route("/refresh").post(authController.refreshToken)

//protected router
router.route("/user").get(authMiddileware , authController.users)


export const authRouter  = router
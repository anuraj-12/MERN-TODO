
import Router from "express"
import * as authController from "../controller/auth.controller.js"
import {login , singUp} from "../validator/zod.validate.js"
import {validate} from "../middleware/validate-middleware.js"
import {authMiddileware} from "../middleware/auth-middleware.js"



const router  = Router();


router.route("/register").post(validate(singUp) ,authController.signUpUser)
router.route("/login").post(validate(login) ,authController.loginUser)
router.route("/logout").post(authController.userLogout)
router.route("/refresh").post(authController.refreshToken)

//protected router
router.route("/user").get(authMiddileware , authController.users)


export const authRouter  = router
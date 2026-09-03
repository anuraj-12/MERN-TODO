import { Router } from "express";
import * as productController from "../controller/product.controller.js"
const router =  Router()

router.route("/get").get(productController.getProduct)
router.route("/add").post(productController.addProduct)
router.route("/update/:id").patch(productController.updateProduct)
router.route("/delete/:id").delete(productController.deleteProduct)

export const productList =  router

import { Router } from "express";
import productControllers from "./product.controllers";

const router = Router();

router.get("/get-product", productControllers.getProduct);
router.post("/create-product", productControllers.createProduct);
router.delete("/delete/:id", productControllers.deleteProduct);

export default router;

import { Router } from "express";
import productRoutes from "../modules/product/product.routes";
import cors from "cors";

const router = Router();

const corsConfig = {
  origin: ["http://localhost:3001"],
};
router.use("/product", cors(corsConfig), productRoutes);

export default router;

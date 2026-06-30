import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();


router.post("/", productController.createProduct);
router.get("/performance", productController.testPerformance);
router.get("/stats", productController.getCategoryStats);

router.get('/',productController.getProductByCategory)
router.get("/:id", productController.getProductById);

export default router;

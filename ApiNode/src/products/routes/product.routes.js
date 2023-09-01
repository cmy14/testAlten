
import express from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductRepositoryImpl } from "../repository/product.repo.impl";

const router = express.Router();
const productRepository = new ProductRepositoryImpl();
const productController = new ProductController(productRepository);

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct)
export default router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const product_repo_impl_1 = require("../repository/product.repo.impl");
const router = express_1.default.Router();
const productRepository = new product_repo_impl_1.ProductRepositoryImpl();
const productController = new product_controller_1.ProductController(productRepository);
router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
exports.default = router;

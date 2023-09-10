"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryImpl = void 0;
// src/articles/infrastructure/mongoose/ProductRepositoryImpl.ts
const product_1 = require("../models/product");
class ProductRepositoryImpl {
    async create(productDTO) {
        const createdArticle = await product_1.ProductModel.create(productDTO);
        return createdArticle;
    }
    async findById(id) {
        const article = await product_1.ProductModel.findById(id);
        return article;
    }
    async getAllProducts(debut, fin) {
        const product = (await product_1.ProductModel.find()).splice(debut, fin);
        return product;
    }
    async deleteProduct(id) {
        //  ProductModel.deleteOne({x:id})
        const deletedProduct = await product_1.ProductModel.findByIdAndDelete(id);
        return deletedProduct;
    }
    async updateProduct(id, updateData) {
        const updatedProduct = await product_1.ProductModel.findByIdAndUpdate(id, updateData, { new: true });
        return updatedProduct;
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;

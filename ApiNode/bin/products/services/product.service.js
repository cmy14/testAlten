"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const productmapper_1 = require("../mapper/productmapper");
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProductById(id) {
        const product = await this.productRepository.findById(id);
        return product;
    }
    async getAllProducts(page, nombreParge) {
        const debut = (page - 1) * nombreParge;
        const fin = page + debut;
        const products = await this.productRepository.getAllProducts(debut, fin);
        return products;
    }
    async createProduct(productDTO) {
        const product = productmapper_1.ProductMapper.toProductDocument(productDTO);
        const createdProduct = await this.productRepository.create(product);
        return createdProduct;
    }
    async updateProduct(productId, productDTO) {
        const product = productmapper_1.ProductMapper.toProductDocument(productDTO);
        const updatedProduct = await this.productRepository.updateProduct(productId, product);
        return updatedProduct;
    }
    async deleteProduct(productId) {
        const deletedProduct = await this.productRepository.deleteProduct(productId);
        return deletedProduct;
    }
}
exports.ProductService = ProductService;

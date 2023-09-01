"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const product_dto_1 = require("../dto/product.dto");
class ProductMapper {
    static toProductResponseDTO(product) {
        return new product_dto_1.ProductResponseDTO(product._id, product.code, product.name, product.description, product.price, product.quantity, product.inventoryStatus, product.category, product.image, product.rating);
    }
    static toProductDocument(createProductDTO) {
        const { code, name, description, price, quantity, inventoryStatus, category, image, rating } = createProductDTO;
        return {
            code,
            name,
            description,
            price,
            quantity,
            inventoryStatus,
            category,
            image,
            rating
        };
    }
}
exports.ProductMapper = ProductMapper;

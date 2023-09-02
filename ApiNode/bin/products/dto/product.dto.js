"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDTO = exports.CreateProductDTO = void 0;
class CreateProductDTO {
    constructor(code, name, description, price, quantity, inventoryStatus, category, image, rating) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.inventoryStatus = inventoryStatus;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}
exports.CreateProductDTO = CreateProductDTO;
class ProductResponseDTO {
    constructor(id, code, name, description, price, quantity, inventoryStatus, category, image, rating) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.inventoryStatus = inventoryStatus;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}
exports.ProductResponseDTO = ProductResponseDTO;

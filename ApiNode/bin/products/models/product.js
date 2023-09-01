"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    _id: { type: Number, },
    code: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inventoryStatus: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    rating: { type: Number, required: false },
});
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema);

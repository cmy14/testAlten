
import mongoose, { Document, Schema, model } from "mongoose";
const AutoIncrement = require('mongoose-sequence')(mongoose);
export interface ProductDocument extends Document {
  _id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}

const productSchema = new Schema<ProductDocument>({
  
  _id: Number,
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  inventoryStatus : { type: String, required: true },
  category : { type: String, required: true },
  image : { type: String, required: false},
  rating : { type: Number, required: false},
});
productSchema.plugin(AutoIncrement, { inc_field: '_id' });
productSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v; // Optionally, remove the __v field
  },
});
export const ProductModel = model<ProductDocument>("Product", productSchema);
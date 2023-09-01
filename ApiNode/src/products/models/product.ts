
import { Document, Schema, model } from "mongoose";
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
  
  _id: { type: Number, },
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

export const ProductModel = model<ProductDocument>("Product", productSchema);
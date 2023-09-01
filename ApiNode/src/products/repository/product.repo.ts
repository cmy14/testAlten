import { ProductDocument } from "../models/product";

export interface ProductRepository {
  create(productData: Partial<ProductDocument>): Promise<ProductDocument>;
  findById(id: number): Promise<ProductDocument | null>;
  getAllProducts(debut: number , fin : number ): Promise<ProductDocument[]>;
  deleteProduct(id: number): Promise<ProductDocument | null>;
  updateProduct(id: number, updateData: Partial<ProductDocument>): Promise<ProductDocument | null> ;
}
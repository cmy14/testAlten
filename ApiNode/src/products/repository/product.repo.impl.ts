
// src/articles/infrastructure/mongoose/ProductRepositoryImpl.ts
import { ProductDocument, ProductModel } from "../models/product";
import { ProductRepository } from "./product.repo";

export class ProductRepositoryImpl implements ProductRepository {
  
  async create(productDTO: Partial<ProductDocument>): Promise<ProductDocument> {
    const createdArticle = await ProductModel.create(productDTO);
    return createdArticle;
  }

  async findById(id: number): Promise<ProductDocument | null> {
    const article = await ProductModel.findById(id);
    return article;
  }

  async getAllProducts(debut:number , fin:number ): Promise<ProductDocument[]> {

    const product = (await ProductModel.find()).splice(debut , fin );
    return product;
  }


  async deleteProduct(id: number) : Promise<ProductDocument | null> {
    //  ProductModel.deleteOne({x:id})
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    return deletedProduct;

  }


  async updateProduct(id: number, updateData: Partial<ProductDocument>): Promise<ProductDocument | null> {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    return updatedProduct;
  }
}

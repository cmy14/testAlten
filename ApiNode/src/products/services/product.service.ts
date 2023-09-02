
import { ProductRepository } from "../repository/product.repo";
import { ProductDocument } from "../models/product";
import { ProductMapper } from "../mapper/productmapper";
import { CreateProductDTO } from "../dto/product.dto";

export class ProductService {
  constructor(private  productRepository: ProductRepository) {}



  async getProductById(id: number): Promise<ProductDocument | null> {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async getAllProducts(  page : number , nombreParge : number): Promise<ProductDocument[]> {
    const debut = (page-1) * nombreParge ;
    const fin = nombreParge  + debut

    console.log("debut service :"+debut)
    console.log("fin  service:"+fin)
    const products = await this.productRepository.getAllProducts(debut , fin );
    return products;
  }

  async createProduct(productDTO: CreateProductDTO): Promise<ProductDocument> {
   // const product = ProductMapper.toProductDocument(productDTO);
    const createdProduct = await this.productRepository.create(productDTO);
    return createdProduct;
  }

  async updateProduct(productId: number, productDTO: CreateProductDTO): Promise<ProductDocument | null> {
    const product = ProductMapper.toProductDocument(productDTO);
    const updatedProduct = await this.productRepository.updateProduct(productId, product);
    return updatedProduct;
  }

  async deleteProduct(productId: number): Promise<ProductDocument | null> {
    const deletedProduct = await this.productRepository.deleteProduct(productId);
    return deletedProduct;
  }
}

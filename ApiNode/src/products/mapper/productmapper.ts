// src/articles/application/ArticleMapper.ts
import { ProductDocument } from "../models/product";
import { CreateProductDTO, ProductResponseDTO } from "../dto/product.dto";

export class ProductMapper {
  static toProductResponseDTO(product: ProductDocument): ProductResponseDTO {
    return new ProductResponseDTO(
       product._id,
    product.code,
    product.name,
    product.description,
    product.price,
    product.quantity,
    product.inventoryStatus,
    product.category,
    product.image,
    product.rating
    );
  }

  static toProductDocument(createProductDTO: CreateProductDTO): ProductDocument {
    const { code,
     name,
    description,
    price,
    quantity,
    inventoryStatus,
    category,
    image,
    rating } = createProductDTO;
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

    } as ProductDocument;
  }
}

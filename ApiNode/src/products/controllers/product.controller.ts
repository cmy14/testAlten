// src/products/application/ProductController.ts
import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import * as url from 'url';
import { ProductDocument } from "../models/product";
import { CreateProductDTO } from "../dto/product.dto";
import { ProductMapper } from "../mapper/productmapper";
import { ProductRepository } from "../repository/product.repo";

export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  productService = new ProductService(this.productRepository); // Create an instance of the consolidated service

  createProduct = async (req: Request, res: Response) => {
   const  createProductDTO = req.body as CreateProductDTO;
    
    try {
     // const createdProduct: ProductDocument = await this.productService.createProduct(nom,price, description, barcode);

      const createdProduct: ProductDocument = await this.productService.createProduct(createProductDTO);
      const responseDTO = ProductMapper.toProductResponseDTO(createdProduct);
      res.status(201).json(responseDTO);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "An error occurred while creating the product." });
    }
  };

  getProductById = async (req: Request, res: Response) => {
       const  productId = Number( req.params.id);

    try {
      const product: ProductDocument | null = await this.productService.getProductById(productId);
      if (!product) {
        res.status(404).json({ error: "Product not found." });
        return;
      }
      const responseDTO = ProductMapper.toProductResponseDTO(product);
      res.status(200).json(product);
    } catch (error) {
      console.error("Error retrieving article:", error);
      res.status(500).json({ error: "An error occurred while retrieving the article." });
    }
  };

  getAllProduct = async (req: Request, res: Response) => {

    const numeroPage = Number(req.body.page);
    const nombreElementPage = Number(req.body.pageElement);
    //console.log("fin :"+fin)

  
    // parametre  dans l url 
    // const parsedUrl = url.parse(req.url, true); 
    // const queryParameters = parsedUrl.query;
  
    // const numeroPage = queryParameters.page;
    // const nombreElementPage = queryParameters.pageElement;


    try {
      const products: ProductDocument[] = await this.productService.getAllProducts( numeroPage,  nombreElementPage );
      res.status(200).json(products);
    } catch (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "An error occurred while retrieving products." });
    }
  };



  updateProduct = async (req: Request, res: Response) => {
    const productId = Number(req.params.id);
  //  const  { code, name, description, price, quantity, inventoryStatus, category, image, rating } = req.body;
    //const updateProductDTO = new CreateProductDTO(  code, name, description, price, quantity, inventoryStatus, category, image, rating );
    const updateProductDTO = req.body as CreateProductDTO;
    try {
      const updatedProduct: ProductDocument | null = await this.productService.updateProduct(productId,updateProductDTO);
      if (!updatedProduct) {
        res.status(404).json({ error: "product not found." });
        return;
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
     
      res.status(500).json({error: "An error occurred while updating the product." });
    }
  };

  deleteProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    try {
      const deletedProduct: ProductDocument | null = await this.productService.deleteProduct(productId);
      if (!deletedProduct) {
        res.status(404).json({ error: "Product not found." });
        return;
      }
      const responseDTO = ProductMapper.toProductResponseDTO(deletedProduct);
     
      res.status(200).json(responseDTO);
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({error : "An error occurred while deleting the product."});
    }
  };
}

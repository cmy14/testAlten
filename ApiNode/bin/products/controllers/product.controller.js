"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
const productmapper_1 = require("../mapper/productmapper");
class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.productService = new product_service_1.ProductService(this.productRepository); // Create an instance of the consolidated service
        this.createProduct = async (req, res) => {
            const createProductDTO = req.body;
            try {
                // const createdProduct: ProductDocument = await this.productService.createProduct(nom,price, description, barcode);
                const createdProduct = await this.productService.createProduct(createProductDTO);
                const responseDTO = productmapper_1.ProductMapper.toProductResponseDTO(createdProduct);
                res.status(201).json(responseDTO);
            }
            catch (error) {
                console.error("Error creating product:", error);
                res.status(500).json({ error: "An error occurred while creating the product." });
            }
        };
        this.getProductById = async (req, res) => {
            const productId = Number(req.params.id);
            try {
                const product = await this.productService.getProductById(productId);
                if (!product) {
                    res.status(404).json({ error: "Product not found." });
                    return;
                }
                const responseDTO = productmapper_1.ProductMapper.toProductResponseDTO(product);
                res.status(200).json(product);
            }
            catch (error) {
                console.error("Error retrieving article:", error);
                res.status(500).json({ error: "An error occurred while retrieving the article." });
            }
        };
        this.getAllProduct = async (req, res) => {
            const numeroPage = Number(req.body.page);
            const nombreElementPage = Number(req.body.pageElement);
            //console.log("fin :"+fin)
            // parametre  dans l url 
            // const parsedUrl = url.parse(req.url, true); 
            // const queryParameters = parsedUrl.query;
            // const numeroPage = queryParameters.page;
            // const nombreElementPage = queryParameters.pageElement;
            try {
                const products = await this.productService.getAllProducts(numeroPage, nombreElementPage);
                res.status(200).json(products);
            }
            catch (error) {
                console.error("Error retrieving products:", error);
                res.status(500).json({ error: "An error occurred while retrieving products." });
            }
        };
        this.updateProduct = async (req, res) => {
            const productId = Number(req.params.id);
            //  const  { code, name, description, price, quantity, inventoryStatus, category, image, rating } = req.body;
            //const updateProductDTO = new CreateProductDTO(  code, name, description, price, quantity, inventoryStatus, category, image, rating );
            const updateProductDTO = req.body;
            try {
                const updatedProduct = await this.productService.updateProduct(productId, updateProductDTO);
                if (!updatedProduct) {
                    res.status(404).json({ error: "product not found." });
                    return;
                }
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                console.error("Error updating product:", error);
                res.status(500).json({ error: "An error occurred while updating the product." });
            }
        };
        this.deleteProduct = async (req, res) => {
            const productId = parseInt(req.params.id);
            try {
                const deletedProduct = await this.productService.deleteProduct(productId);
                if (!deletedProduct) {
                    res.status(404).json({ error: "Product not found." });
                    return;
                }
                const responseDTO = productmapper_1.ProductMapper.toProductResponseDTO(deletedProduct);
                res.status(200).json(responseDTO);
            }
            catch (error) {
                console.error("Error deleting product:", error);
                res.status(500).json({ error: "An error occurred while deleting the product." });
            }
        };
    }
}
exports.ProductController = ProductController;

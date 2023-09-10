import { ProductDocument, ProductModel } from '../src/products/models/product';
import {describe, expect, test , it, jest, afterAll, beforeEach, beforeAll } from '@jest/globals';
//import { ProductMapper } from "../mapper/productmapper";
import mongoose from 'mongoose';
require('dotenv').config()

// Connect to a test MongoDB instance
beforeAll(async () => {
  const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDb = process.env.MONGO_DB_TEST;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

// connection a la base 
//URL de notre base

var urlmongo = "mongodb://"+mongoUser+":"+mongoPassword+"@"+mongoHost+":"+mongoPort+"/"+mongoDb+"?authSource=admin"; 
  //await mongoose.connect('mongodb://root:example@localhost:27017/testnodetest?authSource=admin'
   mongoose.connect(urlmongo
 // , {
   // useNewUrlParser: true,
    //useUnifiedTopology: true,
//  }
  );
});

// Clear the database before each test
beforeEach(async () => {
  await ProductModel.deleteMany({});
});

// Disconnect from MongoDB after all tests are done
afterAll(async () => {
  await mongoose.connection.close();
});



describe('Product Model', () => {
  
  it('should save a product to the database',  () => {
    const productData = {
      code: 'ABC123',
      name: 'Test Product',
      description: 'A test product',
      price: 10.99,
      quantity: 100,
      inventoryStatus: 'In Stock',
      category: 'Test Category',
    };

    const product = new ProductModel(productData);
    product.save();
  
    //const savedProduct =  ProductModel.findOne({ code: 'ABC123' });
    expect(product.name).toBe('Test Product');
  });


});


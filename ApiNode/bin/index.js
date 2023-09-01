"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const res = require('express/lib/response');
const crypto = require('crypto');
const UserModel = require('./users/models/users.model');
const insert = require('./users/controllers/users.controllers');
const app = express();
const router = express.Router();
const product_routes_1 = __importDefault(require("./products/routes/product.routes"));
const mongoose = require('mongoose');
require('dotenv').config();
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDb = process.env.MONGO_DB;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
// connection a la base 
//URL de notre base
var urlmongo = "mongodb://" + mongoUser + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDb + "?authSource=admin";
console.log(urlmongo);
mongoose.connect(urlmongo);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function () {
    console.log("Connexion à la base OK");
});
// variable to send 
const ads = [{ title: ' hello world part 2' }];
// add module to express 
// @ts-ignore
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
// define endpoint front controller 
app.use('/products', product_routes_1.default);
// define 
// starting sever
app.listen(process.env.APP_PORT, () => {
    console.log('listen on port 8083');
});

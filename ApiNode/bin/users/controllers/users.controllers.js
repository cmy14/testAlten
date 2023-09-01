"use strict";
//require('../models/users.model');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require('../models/users.model');
//const Users = require('../models/users.model');
module.exports.insert = (req, res) => {
    let salt = crypto.randomBytes(16);
    let hash = crypto.createHmac('sha512', salt).update(req.body.password) /*.digest("console log")*/;
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    users.createUser(req.body).then((result) => {
        res.status(201).send({ id: result._id });
    });
};
module.exports.getAll = (req, res) => {
    users.getAllUser().then((result) => { res.status(201).send({ list: result }); });
};
module.exports.login = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await users.users.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            });
            // save user token
            user.token = token;
            // user
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
    }
};
module.exports.register = async (req, res) => {
    try {
        // Get user input
        const { firstName, lastName, email, password } = req.body;
        // Validate user input
        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input is required");
        }
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await users.users.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        //Encrypt user password
        var encryptedPassword = await bcrypt.hash(password, 10);
        // Create user in our database
        const user = await users.users.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });
        // Create token
        const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        });
        // save user token
        user.token = token;
        // return new user
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
    }
};

"use strict";
const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number,
    token: String,
});
const Users = model('Users', userSchema);
exports.users = Users;
exports.createUser = (userData) => {
    const user = new Users(userData);
    return user.save();
};
exports.getAllUser = () => {
    return Users.find();
};

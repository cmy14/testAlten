"use strict";
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { insert, getAll, login, register } = require('../controllers/users.controllers');
router.post('/', insert);
router.get('/all', getAll);
router.post('/login', login);
router.post('/register', register);
router.get('/', auth, (req, res) => {
    return res.status(201).send({ id: "test" });
});
module.exports = router;

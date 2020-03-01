const express = require('express')
const router = express.Router()
const deleteController = require("../controllers/deleteController");

const deleteItemRoute = router.delete("/:id", deleteController);

module.exports = deleteItemRoute;
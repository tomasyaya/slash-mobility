const express = require('express')
const router = express.Router()
const getAllController = require("../controllers/getAllController");

const getItemsRoute = router.get("/", getAllController);

module.exports = getItemsRoute;
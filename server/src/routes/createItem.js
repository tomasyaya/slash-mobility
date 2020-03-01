const express = require('express')
const router = express.Router()
const createController = require("../controllers/createController");

const createItemRoute = router.post("/", createController);

module.exports = createItemRoute;
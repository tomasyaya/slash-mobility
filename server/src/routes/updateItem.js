const express = require('express')
const router = express.Router()
const updateController = require("../controllers/updateController");

const updateItemRoute = router.put("/:id", updateController);

module.exports = updateItemRoute;
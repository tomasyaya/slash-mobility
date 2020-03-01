const express = require('express')
const router = express.Router()
const getController = require("../controllers/getController");

const getItemRoute = router.get("/:id", getController);

module.exports = getItemRoute;
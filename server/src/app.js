const express = require('express')
const app = express()
const cors = require("cors")
const { 
    createItemRoute, 
    getItemRoute, 
    getItemsRoute, 
    updateItemRoute,
    deleteItemRoute
 } = require("./routes/index");
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: "*",
    credentials: false
}));

app.use("/items", getItemRoute);
app.use("/items", getItemsRoute);
app.use("/items", updateItemRoute);
app.use("/items", createItemRoute);
app.use("/items", deleteItemRoute);
 
module.exports = app
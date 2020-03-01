const fetchData = require("../mockUpData/fetchData");

const createController = async (req, res) => {
    try {
        const {name, price, image} = req.body;
        const items = await fetchData();
        const id = Math.floor(Math.random() * 10000)
        res.json({
            status: 200,
            message: "Success",
            body: [...items, {name, price, image, id}]
        })
    } catch(e) {
        res.json({
            status: 400,
            message: "An error has occur",
            error: e
        })
    }
}

module.exports = createController;
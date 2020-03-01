const fetchData = require("../mockUpData/fetchData");

const getAllController = async (req, res) => {
    try {
        const items = await fetchData();
        res.json({
            status: 200,
            message: "Success",
            body: items
        })
    } catch(e) {
        res.json({
            status: 400,
            message: "An error has occur",
            error: e
        })
    }
}

module.exports = getAllController;
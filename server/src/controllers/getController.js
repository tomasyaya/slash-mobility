const fetchData = require("../mockUpData/fetchData");

const getController = async (req, res) => {
    try {
        const {id: itemId} = req.params
        const items = await fetchData();
        res.json({
            status: 200,
            message: "Success",
            body: items.filter(item => item.id === itemId)
        })
    } catch(e) {
        res.json({
            status: 400,
            message: "An error has occur",
            error: e
        })
    }
}

module.exports = getController;
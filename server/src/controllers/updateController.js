const fetchData = require("../mockUpData/fetchData");

const updateController = async (req, res) => {
    try {
        const {name, price, image} = req.body;
        const {id: itemId} = req.params; 
        const items = await fetchData();
        const updateItems = items.map(item => {
            if(item.id === itemId) {
                return {name, price, image, id: itemId}
            }
            return item
        })
        res.json({
            status: 200,
            message: "Success",
            body: updateItems
        })
    } catch(e) {
        res.json({
            status: 400,
            message: "An error has occur",
            error: e
        })
    }
}

module.exports = updateController;
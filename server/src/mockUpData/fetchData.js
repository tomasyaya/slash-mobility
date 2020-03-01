const {data} = require("./data")

const fetchData = async () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000)
})

module.exports = fetchData;
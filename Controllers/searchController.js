const searchService = require("../services/searchService");

const searchDishes = async (req, res) => {
    const { query } = req.query;
    try {
        const results = await searchService.search(query);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Error performing search", error });
    }
};  
 module.exports = {searchDishes}
const express = require("express");
const router = express.Router();
const {searchDishes} = require("../Controllers/searchController")

// Define the search route
router.get("/search", searchDishes);

module.exports = router;

const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController");

// single random cat fact
router.get("/fact", catController.getFact);

// multiple facts
router.get("/facts", catController.getFacts);

// cat breeds
router.get("/breeds", catController.getBreeds);

module.exports = router;

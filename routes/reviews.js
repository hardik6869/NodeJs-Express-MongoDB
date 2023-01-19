const express = require("express");
const advancedResults = require("../middleware/advanceResults");
const Review = require("../models/Review");
const { getReviews } = require("../controllers/review");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    advancedResults(Review, { path: "bootcamp", select: "name description" }),
    getReviews
  );

module.exports = router;

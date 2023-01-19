const express = require("express");
const advancedResults = require("../middleware/advanceResults");
const Review = require("../models/Review");
const { getReviews, getReview } = require("../controllers/review");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    advancedResults(Review, { path: "bootcamp", select: "name description" }),
    getReviews
  );

router.route("/:id").get(getReview);

module.exports = router;

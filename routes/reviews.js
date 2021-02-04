const express = require('express'),
    router = express.Router(),
    ReviewsModel = require('../models/reviews');

router.post('/add', async (req, res) => {
    const { park_id, review_content, score } = req.body;
    const Review = new ReviewsModel(null, park_id, review_content, score);
    const response = await Review.addReview();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', (req, res) => {
    console.log('Deleting a review');
});

module.exports = router;

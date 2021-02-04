const express = require('express'),
    router = express.Router(),
    ParksModel = require('../models/parks');

router.get('/', async (req, res, next) => {
    const parkData = await ParksModel.getAll();

    res.render('template', {
        locals: {
            title: 'List of Parks',
            parkData: parkData,
        },
        partials: {
            body: 'home',
        },
    });
});

router.get('/:park_id?', async (req, res, next) => {
    const parkId = req.params.park_id,
        Park = new ParksModel(parkId),
        parkData = await Park.getParkData(),
        reviewData = await Park.getParkReviews();

    res.render('template', {
        locals: {
            title: parkData.name,
            parkData: parkData,
            reviewData: reviewData,
        },
        partials: {
            body: 'partials/single-park',
        },
    });
});

module.exports = router;

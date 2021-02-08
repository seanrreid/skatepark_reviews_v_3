const express = require('express'),
    router = express.Router(),
    ParksModel = require('../models/parks');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const parkData = await ParksModel.getAll();
    console.log('SESSION STUFF:', req.session);
    res.render('template', {
        locals: {
            title: 'Time to shred bruh!',
            is_logged_in: req.session.is_logged_in,
            parkData
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;

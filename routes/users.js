const express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/signup', function (req, res) {
    res.render('template', {
        locals: {
            title: 'Register for an Account',
        },
        partials: {
            body: 'partials/signup',
        },
    });
});

router.get('/login', function (req, res) {
    res.render('template', {
        locals: {
            title: 'User Log In',
        },
        partials: {
            body: 'partials/login',
        },
    });
});

/* POST user routes. */
router.post('/signup', function (req, res) {
    const { first_name, last_name, email, password } = req.body;
    console.log('user details', first_name, last_name, email, password);
    res.sendStatus(200);
});

router.post('/login', function (req, res) {
    const { email, password } = req.body;
    console.log('email and password', email, password);
    res.sendStatus(200);
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET user routes */

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register for an Account',
        },
        partials: {
            body: 'partials/signup',
        },
    });
});

router.get('/login', (req, res) => {
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
router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    console.log(req.body);
    res.sendStatus(200);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;

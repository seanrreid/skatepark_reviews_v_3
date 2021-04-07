const host = 'ziggy.db.elephantsql.com',
    database = 'alnloyac',
    user = 'alnloyac',
    password = 'jhAiMSnMfwriUO20m0VPnP6kctla3-dU';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    },
});

const options = {
    host,
    database,
    user,
    password
};

const db = pgp(options);

module.exports = db;

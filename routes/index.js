const group9Router = require('./group9Router');

const router = (app) => {
    app.use('/group9Router', group9Router);
};

module.exports = router;
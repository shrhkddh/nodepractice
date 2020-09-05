const groupsRouter = require('./groupsRouter');

const router = (app) => {
    app.use('/groupsRouter', groupsRouter);
};

module.exports = router;
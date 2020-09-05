const batchesRouter = require('./batchesRouter');

const router = (app) => {
    app.use('/batchesRouter', batchesRouter);
};

module.exports = router;
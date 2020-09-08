const batchesRouter = require('./batchesRouter');
const membersRouter = require('./membersRouter');
const pairsRouter   = require('./pairsRouter');

const router = (app) => {
    app.use('/batchesRouter', batchesRouter);
    app.use('/membersRouter', membersRouter);
    app.use('/pairsRouter', pairsRouter);
};

module.exports = router;
const batchesRouter = require('./batchesRouter');
const membersRouter = require('./membersRouter');
const pairsRouter   = require('./pairsRouter');

const router = (app) => {
    app.use('/batches', batchesRouter);
    app.use('/members', membersRouter);
    app.use('/pairs', pairsRouter);
};

module.exports = router;
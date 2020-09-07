const batchesRouter = require('./batchesRouter');
const membersRouter = require('./membersRouter')

const router = (app) => {
    app.use('/batchesRouter', batchesRouter);
    app.use('/membersRouter', membersRouter);
};

module.exports = router;
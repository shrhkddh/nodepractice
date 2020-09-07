const { Batches }        = require('../DAO');
const { errorGenerator } = require('../utils');

const getBatches = async function ( req, res, next ) {
    try {
        const [batches] = await Batches.findAll(req.query);
        // const [batches] = await Batches.findAll();
        console.log(req.query);

        res.status(200).json({ batches });
    } catch (err) {
        next(err);
    }
};

const getOneBatch = async function ( req, res, next ) {
    try {
        const [batch] = await Batches.findById(req.params.id);

        if(!batch.length) errorGenerator('Not found', 404);

        res.status(200).json({ batch });
    } catch (err) {
        next(err);
    }
};

module.exports = { getBatches, getOneBatch };
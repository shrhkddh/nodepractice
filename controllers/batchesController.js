const { Batches }        = require('../DAO');

// const Batch = require('../models/Batches');
const { errorGenerator } = require('../utils');

const getBatches = async function ( req, res, next ) {
    try {
        const batches = await Batches.findbatch(req.query);
        // const batches = await Batch.find();
        // console.log("batches is : ",batches);

        res.status(200).json({ batches });
    } catch (err) {
        next(err);
    }
};

const postBatches = async function ( req, res, next ) {
    try {
        const batches = await Batches.makebatch(req.body);

        res.status(200).json({ result : batches });
    } catch (err) {
        next(err);
    }
};

module.exports = { getBatches, postBatches };
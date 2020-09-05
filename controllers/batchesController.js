const { Batches }          = require('../DAO');
const { errorGenerator } = require('../utils');

const getMembers = async function ( req, res, next ) {
    try {
        const [members] = await Batches.findAll(req.query);
        
        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const getOneMember = async function ( req, res, next ) {
    try {
        const [member] = await Batches.findById(req.params.id);

        if(!member.length) errorGenerator('Not found', 404);

        res.status(200).json({ member });
    } catch (err) {
        next(err);
    }
};

const getBatchMembers = async function ( req, res, next) {
    try {
        const [batch] = await Batches.findAll({
            attributes : ['batch']
        });
        if(!group.length) errorGenerator('No batch', 401);

        res.status(200).json({ group });
    } catch (err) {
        next(err);
    }
};

module.exports = { getMembers, getBatchMembers, getOneMember };
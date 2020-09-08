const { Members }        = require('../DAO');
const { errorGenerator } = require('../utils');

const getAllMembers = async function ( req, res, next ) {
    try {
        const [members] = await Members.findAll(req.query);
        
        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const getBatchMembers = async function ( req, res, next ) {
    try {
        const [batchmembers] = await Members.findById(req.query.id);

        if(!batchmembers.length) errorGenerator('Not found', 404);

        res.status(200).json({ batchmembers });
    } catch (err) {
        next(err);
    }
};

const postMember = async function (req, res, next) {
    try {
        const member    = req.body;
        const newMember = new Members(member);
        await newMember.create();

        res.status(200).json({
            message : "Member created",
        });
    } catch (err) {
        next(err);
    }
};

const patchMember = async function (req, res, next) {
    try {
        const member    = req.body;
        const newMember = new Members(member);
        await newMember.update(req.params.id);

        res.status(200).json({
            message : "Complete Update Member",
        });
    } catch (err) {
        next(err);
    }
};

const deleteMember = async function (req, res, next) {
    try {
        const member = await Members.delete(req.params.id);

        res.status(200).json({
            message : "Delete Member"
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllMembers, getBatchMembers, postMember, patchMember, deleteMember};
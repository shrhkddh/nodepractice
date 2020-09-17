const { Members }        = require('../DAO');

// const Member = require('../models/Members');
const { errorGenerator } = require('../utils');

const getMembers = async function ( req, res, next ) {
    try {
        const members = await Members.findmember(req.query);
        
        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const signUp = async function (req, res, next) {
    try {
        const member = Members.makemember(req.body);

        res.status(200).json({ member });
    } catch (err) {
        next(err);
    }
};

const signIn = async function (req, res, next) {

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

module.exports = { getMembers, signUp, signIn, patchMember, deleteMember};
const { Members }        = require('../DAO');
const { errorGenerator } = require('../utils');

const getAllMembers = async function ( req, res, next ) {
    try {
        // console.log(req.query)
        const [members] = await Members.findAll(req.query);
        

        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const getBatchMembers = async function ( req, res, next ) {
    try {
        // console.log(req.query)
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
        console.log('members is :', member)

        const newMember = new Members(member);
        console.log("newmember type is : ", typeof(newMember));
        console.log("show newmember: ", newMember.id);

        await newMember.create();
        console.log("순서좀 알아보자");

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
        await newMember.update();

        res.status(200).json({
            message : "Complete Update Member",
        });
    } catch (err) {
        next(err);
    }
};

const deleteMember = async function (req, res, next) {
    try {
        const member = await Members.delete(req.query.name);
        console.log(req.query.name)

        res.status(200).json({
            message : "Delete Member"
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllMembers, getBatchMembers, postMember, patchMember, deleteMember};
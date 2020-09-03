const { Group }         = require('../DAO');
const { errorGenerator } = require('../utils/');

const getMembers = async function ( req, res, next ) {
    try {
        const [members] = await Group.findAll(req.query);

        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const getOneMember = async function ( req, res, next ) {
    try {
        const [member] = await Group.findById(req.params.id);

        if(!member.length) errorGenerator('Not found', 404);

        res.status(200).json({ member });
    } catch (err) {
        next(err);
    }
};

const getGroupMember = async function ( req, res, next) {
    try {
        const [group] = await Group.findAll({
            attributes : ['group']
        });
        if(!group.length) errorGenerator('No group', 401);

        res.status(200).json({ group });
    } catch (err) {
        next(err);
    }
};

module.exports = { getMembers, getGroupMember, getOneMember };
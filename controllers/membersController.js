const { Members }        = require('../DAO');

// const Member = require('../models/Members');
const { errorGenerator, shuffle } = require('../utils');
const bcrypt = require('bcryptjs');

const getMembers = async function ( req, res, next ) {
    try {
        const members = await Members.findMember(req.query);
        
        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

const signUp = async function (req, res, next) {
    try {
        const { email } = req.body;
        const member = await Members.findMember({ email });
        if (member.length != 0) errorGenerator('ALREADY_EXISTS', 401);

        await Members.createMemberData(req.body);

        res.status(200).json({ message : 'CREATE MEMBER' });
    } catch (err) {
        next(err);
    }
};

const signIn = async function (req, res, next) {
    try {
        const { email = null, password = null } = req.body;

        const [member] = await Members.findMember({ email });
        if (!member) errorGenerator('INVALID MEMBER', 401);

        const passwordCheck = await bcrypt.compare(password, member.password);
        if (!passwordCheck) errorGenerator('INVALID PASSWORD', 401);

        const token = Members.createToken(member._id);
        // localStorage.setItem('token', token);
        console.log("Token is : ", typeof(token));
        res.status(200).json({ message : 'CREATE TOKEN', token });
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

const shuffleTest = async function (req, res, next) {
    try {
        const members = await Members.findMember(req.query);

        let pairs = [];
        let shuffledList = shuffle(members);
        pairs.push(shuffledList);
        res.status(200).json({ pairs });
    } catch (err) {
        next(err);
    }
};
module.exports = { getMembers, signUp, signIn, patchMember, deleteMember, shuffleTest};
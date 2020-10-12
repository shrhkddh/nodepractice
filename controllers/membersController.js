const bcrypt             = require('bcryptjs');
const redis              = require('../database');
const { Members }        = require('../DAO');
const { errorGenerator } = require('../utils');


const getMembers = async function ( req, res, next ) {
    try {
        const members = await Members.findMember(req.query);
        if (members.length === 0) errorGenerator('UNEXISTS_MEMBER', 400);
        
        res.status(200).json( members );
    } catch (err) {
        next(err);
    }
};

const signUp = async function (req, res, next) {
    try {
        const { email } = req.body;
        const member = await Members.findMember({ email });
        
        if (member.length != 0) await Members.registerdMemberData(req.body);

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
        if (!member) errorGenerator('INVALID EMAIL', 400);

        const passwordCheck = await bcrypt.compare(password, member.password);
        if (!passwordCheck) errorGenerator('INVALID PASSWORD', 401);

        const token = await Members.createToken(member._id);
        redis.redisdb.hset('membersToken', token.accessToken, token.refreshToken);

        res.status(200).json({ token : token.accessToken });
        // res.status(200).json({ message : 'CREATE TOKEN'});
    } catch (err) {
        next(err);
    }
};

// signOut으로 들어오면 먼저 토큰 유효성을 검사한 뒤 유효하면 토큰들 디비에서 다 삭제한다.
const signOut = async function (req, res, next) {
    try{
        const auth = req.headers['authorization'];
        const decodedAuth = jwt.verify(auth, process.env.SECRET_KEY);

        const data = decodedAuth._id
        const removeMongoToken = await Members.deleteToken(data)
        const removeRedisToken = await redis.redisdb.handle_reply('membersToken', auth)

        res.status(200).json({ message : 'REMOVE TOKEN' });
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

module.exports = { 
    getMembers,
    signUp,
    signIn,
    signOut,
    patchMember,
    deleteMember};
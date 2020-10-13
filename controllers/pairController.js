const { Pairs, Members } = require('../DAO');
const redis              = require('../database');
const jwt                = require('jsonwebtoken');
const { promisify }      = require('util');

const { 
    errorGenerator,
    groupStudents,
    shuffle,
    savePair,
    filterDuplicate
} = require('../utils');

const getPair = async function (req, res, next) {
    // log-in 한 뒤에 자신의 짝을 볼수있는 get 메소드 API로 만들어야 할듯
    try {
        const auth = req.headers['authorization'];
        // console.log('accessT is ', auth )
        // const decodedAccessToken = jwt.verify(
        //     auth,
        //     process.env.SECRET_KEY,
        //     function (err, decodedAccessT) {
        //         if (err.name === 'TokenExpiredError'){
        //             await redis.redisdb.hget(
        //                 'membersToken',
        //                 auth,
        //                 function (err, obj) {
        //                     const decodeRefreshToken = jwt.verify(
        //                         decodedAccessT,
        //                         process.env.SECRET_KEY,
        //                         function (err, decodedRefreshT){
        //                             if (err.name === 'TokenExpiredError'){
        //                                 res.status(401).json({ message : 'RELOG-IN PLEASE'});
        //                             } else {
        //                                 decodedAccessT = jwt.sign(
        //                                     { _id : decodedRefreshT._id },
        //                                     process.env.SECRET_KEY,
        //                                     { expiresIn : '10m' }
        //                                 );

        //                             }
        //                         })
        //         });
        //     }
        //     console.log('decoded token is : ', decoded)
        // });
        

        const redisData = redis.redisdb.type('membersToken', auth);
        const result = redis.redisdb.hget('membersToken', auth, function (err, obj) {
            console.log('redisToken is : ', obj)
            const refreshToken = obj
            // const refreshTokenData = jwt.verify(memberRefreshToken, process.env.SECRET_KEY);
            // console.log('obj is : ', refreshTokenData.exp)
            return refreshToken
        });
        // // const result = await redis.redisdb.hget('membersToken', auth, redis.print)
        console.log('result type is : ', result);
        

        const batchmembers = await Pairs.findMember(req.query);
        if (batchmembers.length === 0) errorGenerator('UNEXISTS_MEMBER', 400);

        res.status(200).json( batchmembers );
        
    } catch (err) {
        next(err);
    }
};

const createPair = async function (req, res, next) {
    try {
        const week = req.body.week;
        const batchmembers = await Pairs.findMember(req.body);

        let duplication = await filterDuplicate(batchmembers, req.body);
        let recode = await savePair(duplication, week);
        
        res.status(200).json( duplication );
    } catch (err) {
        next(err);
    }
};

module.exports = {getPair, createPair};
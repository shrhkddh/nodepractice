// const db = require('../database');

// class Members {
//     constructor({ batchid, name, email }) {
//         this.id    = batchid;
//         this.name  = name;
//         this.email = email;
//     }

//     create() {
//         db.query(
//             `INSERT INTO members (name, email, batch_id) VALUES ('${this.name}', '${this.email}', '${this.id}')`
//         );
     
//     }
//     static findAll(queryString) {
//         const filter = queryString;

//         if (Object.keys(filter).length === 0 ) {
//             return db.query(`SELECT * FROM members`);
//         }
//         return db.query(`SELECT * FROM members WHERE ${Object.keys(filter)} = "${Object.values(filter)}"`);
//     }

//     update(id) {
//         db.query(
//             `UPDATE members SET email = "${this.email}" WHERE id = '${id}'`
//         );
//     }

//     static delete(id) {
//         db.query(
//             `DELETE FROM members WHERE id = '${id}'`
//         );
//     }
// }

// module.exports = Members;

const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const Member = require('../models/Members');
const Batch  = require('../models/Batches');
const uuid   = require('uuid');

const findMember = async (querystring) => {
    try {
        return Member.find(
            querystring,
            {_id : 1, name : 1, email : 1, pairHistory : 1, password : 1}
        );

    } catch (err) {
        console.log(err)
    }
};

const memberEncodePassword = async ({
    name,
    email,
    password,
    staff,
}) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const memberData = new Member({
        name,
        email,
        password : hashedPassword,
        staff : false,
    });
    return memberData;
};

const createToken = async (memberId) => {
    try{
        const refreshToken = jwt.sign(
            { _id : memberId.toString(), uuid : uuid.v4() },
            process.env.SECRET_KEY,
            { expiresIn : process.env.EXPIRESIN }
            );
        const accessToken = jwt.sign(
            { _id : memberId.toString() },
            process.env.SECRET_KEY,
            { expiresIn : '10m' }
            );

        // const member = await Member.findOneAndUpdate(
        //     { _id   : memberId.toString()},
        //     { $set  : {refreshToken : refreshToken}},
        //     { multi : true, new : true}
        // );
        // const decodedRT = jwt.verify(refreshToken, process.env.SECRET_KEY);
        // console.log("access is : ", (decodedRT.exp - decodedRT.iat));

        return { refreshToken, accessToken };
    } catch (err) {
        console.log(err);
    }
};

const deleteToken = (memberId) => {
    Member.findOneAndUpdate(
        { _id : memberId.toString() },
        { $set : {refreshToken : ''}}
    );
}

const createMemberData = async (memberInput) => {
    const memberData = await memberEncodePassword(memberInput);
    return memberData.save();
};

const registerdMemberData = async (memberInput) => {
    const hashedPassword = await bcrypt.hash(memberInput.password, 12);
    try{
        await Member.updateOne(
            {name : memberInput.name},
            {$set : { password : hashedPassword, staff : false} }
        );
    } catch (err) {
        console.log(err)
    }
}

module.exports = { 
    findMember,
    memberEncodePassword,
    createToken,
    deleteToken,
    createMemberData,
    registerdMemberData,
};
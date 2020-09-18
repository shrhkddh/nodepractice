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
const jwt = require('jsonwebtoken');
const Member = require('../models/Members');

const findMember = (querystring) => {
    const filter = querystring;
    return Member.find(filter)
    //find 메소드는 array형태를 리턴한다.
};

const memberEncodePassword = async ({
    name,
    email,
    password,
}) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const memberData = new Member({
        name,
        email,
        password : hashedPassword,
    });
    console.log("hashPassword is : ", hashedPassword);
    return memberData;
};

const createToken = (memberId) => {
    const token = jwt.sign({ _id : memberId.toString() }, process.env.SECRET_KEY, { expiresIn : process.env.EXPIRESIN });
    // const token2 = jwt.sign({ _id : memberId.toString() }, process.env.SECRET_KEY, { expiresIn : '5m' });

    // console.log("Token1 is : ", token);
    // console.log("This is Token2 : ", token2);
    return token;
};

const createMemberData = async (memberInput) => {
    const memberData = await memberEncodePassword(memberInput);
    return memberData.save();
};

module.exports = { 
    findMember,
    memberEncodePassword,
    createToken,
    createMemberData,
};
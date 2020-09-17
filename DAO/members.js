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

const Member = require('../models/Members');

const findmember = (querystring) => {
    const filter = querystring;
    return Member.find(filter)
};

const makemember = async (body) => {
    try{
        if (body.staff === true){
            await Member.create( {'name' : `${body.name}`, 'email' : `${body.email}`, 'password' : `${body.password}`} );
            await Member.findOneAndUpdate( {'staff' : true} );
            // console.log("IN HERE");
        }
        return Member.create( {'name' : `${body.name}`, 'email' : `${body.email}`, 'password' : `${body.password}`} );
    // console.log("NOPE");
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findmember, makemember };
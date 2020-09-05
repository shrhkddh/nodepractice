const db = require('../database');

console.log(db);

class Batches {
//     constructor({})
    static findAll(queryString) {
        const { filter } = queryString;
        return db.query(`SELECT ${filter ? filter : "*"} FROM members`);
    }

    static findById(id) {
        return db.query(`SELECT * FROM members WHERE members.id = ${id}`);
    }
} 

module.exports = Batches;
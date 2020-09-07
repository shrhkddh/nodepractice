const db = require('../database');

class Batches {
//     constructor({})
    static findAll(queryString) {
        // const { filter } = queryString;
        // return db.query(`SELECT ${filter ? filter : "*"} FROM batches`);
        return db.query(`SELECT * FROM batches`);
        
    }

    static findById(id) {
        return db.query(`SELECT * FROM batches WHERE batches.id = ${id}`);
    }
} 

module.exports = Batches;
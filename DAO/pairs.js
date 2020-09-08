const db = require('../database');

class Pairs {
    constructor({ batchid }) {
        this.id = batchid;
    }

    static findByBatchId(id) {
        return db.query(`SELECT * FROM members WHERE batch_id = ${id}`);
    }

    static findByWeekId() {
        return db.query(`SELECT id FROM weeks`);
    }

    // save(){
    //     return db.query(
    //         `INSERT INTO pairs VALUES`
    //     )
    // }
}

module.exports = Pairs;
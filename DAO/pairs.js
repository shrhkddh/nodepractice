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

    static save(week_id, batch_id,  member1, member2, member3){
        db.query(
            `INSERT INTO pairs (week_id, batch_id, member1, member2, member3) VALUES ('${week_id}', '${batch_id}', '${member1}', '${member2}', '${member3}')`
        );

        // 이 로직은 아직 작동 안함
        db.query(
            `SELECT IF ('${member3}' = 'undefined', 'NULL', member3) FROM pairs`
        );
    }
}

module.exports = Pairs;
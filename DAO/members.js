const db = require('../database');

// console.log("db test : ", db.batches.name)

class Members {
    constructor({ batchid, name, email }) {
        this.id    = batchid;
        this.name  = name;
        this.email = email;
        console.log("what is this?? :", this.id, this.name, this.email)
    }
    
    create() {
        db.query(
            `INSERT INTO batches (name) VALUES ('${this.id}') `
        );
        console.log("what's wrong?? :", this.id);

        const findBatchId = db.query(
            `SELECT id from batches where name = ${this.id}`
        );
        console.log("R U batchID?? : ", findBatchId);

        db.query(
            `INSERT INTO members (name, email) VALUES ('${this.name}', '${this.email}')`
        );
     
    }
    static findAll() {
        // const { filter } = queryString;
        // return db.query(`SELECT ${filter ? filter : "*"} FROM members`);
        return db.query(`SELECT * FROM members`);
    }

    static findById(id) {
        // console.log("input id : ", id)
        return db.query(`SELECT * FROM members WHERE batch_id = ${id}`);
    }

    update() {
        db.query(
            `UPDATE members SET email = "${this.email}" WHERE name = "${this.name}"`
        );
    }

    static delete(name) {
        db.query(
            `DELETE FROM members WHERE name = '${name}'`
        );
    }
}

module.exports = Members;
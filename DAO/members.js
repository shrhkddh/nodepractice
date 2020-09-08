const db = require('../database');

class Members {
    constructor({ batchid, name, email }) {
        this.id    = batchid;
        this.name  = name;
        this.email = email;
    }

    create() {
        db.query(
            `INSERT INTO members (name, email, batch_id) VALUES ('${this.name}', '${this.email}', '${this.id}')`
        );
     
    }
    static findAll() {
        return db.query(`SELECT * FROM members`);
    }

    static findById(id) {
        return db.query(`SELECT * FROM members WHERE batch_id = ${id}`);
    }

    update(id) {
        db.query(
            `UPDATE members SET email = "${this.email}" WHERE id = '${id}'`
        );
    }

    static delete(id) {
        db.query(
            `DELETE FROM members WHERE id = '${id}'`
        );
    }
}

module.exports = Members;
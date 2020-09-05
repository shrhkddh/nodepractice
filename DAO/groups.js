const db = require('../database');

class Groups {
//     constructor({})
    static findAll(queryString) {
        const { filter } = queryString;
        return db.execute(`SELECT ${filter ? filter : "*"} FROM groups`);
    }

    // static findById(id) {
    //     return db.execute(`SELECT * FROM Groups WHERE `)
    // }
} 
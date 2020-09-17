// const db = require('../database');

// class Batches {
//     static findAll(queryString) {
//         const  filter  = queryString;

//         if (Object.keys(filter).length === 0 ) {
//             return db.query(`SELECT * FROM batches `);
//         }
//         return db.query(`SELECT * FROM batches WHERE ${Object.keys(filter)} = "${Object.values(filter)}"`);
        
//     }
// } 

// module.exports = Batches;

// const mongoose = require('mongoose');
const Batch = require('../models/Batches');
// const Batch = require('../models');

// class Batches {
const findbatch = (queryString) => {
    const filter = queryString;

    if (Object.keys(filter).length === 0) {
        return Batch.find({})
    }
    return Batch.find( {name : `${filter.name}`} )
};

const makebatch = (body) => {
    return Batch.create( {'name' : `${body.name}`} );
}

module.exports = { findbatch, makebatch };
// module.exports = Batches;
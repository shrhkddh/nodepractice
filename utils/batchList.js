// const path = require('path');
// const fs = require('fs');
// const batchPath = path.join('../batches.csv');
// const mongoose = require('mongoose');
// const Batch = require('../models/Batches');

const Batches = require('../models/Batches');
const CSVtoJSON = require('csvtojson');
// const { Batches } = require('../DAO');

// CSVtoJSON().fromFile('../batches.csv')
//     .then(batches => {
//         const batchlist = batches;
//         for (let row in batchlist){
//             let batch = Object.values(batchlist[row]).toString();
//             Batches.makebatch(batch);
//         }
//     }).catch(err => {
//         console.log(err);

//     });


(async () => {
    const jsonobj = await CSVtoJSON().fromFile('../batches.csv')
        try {
            const batches = new Batches(jsonobj);
            const result = await batches.insertMany();
            console.log(result);
            // for (var row of jsonobj){
            //     // var batch = Object.values(jsonobj[row]).toString();
            //     // console.log("batch is : ", jsonobj);
            //     console.log("batch type is : ", row);
            //     const batches = new Batches(row);
            //     const result = await batches.insertMany();
            //     // console.log(batch);
            //     // await Batches.create( {'name' : `${batch}`} );
            //     console.log("result is : ", result);
            // }
        } catch (err) {
            console.log('DB SAVE ERROR');
            console.log(err);
        }
})();
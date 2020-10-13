// const { DataTypes } = require('sequelize');

// module.exports = function (sequelize) {
//     return sequelize.define(
//         "Batches",
//         {
//             id : {
//                 type          : DataTypes.INTEGER,
//                 primaryKey    : true,
//                 autoIncrement : true,
//             },
//             name : {
//                 type      : DataTypes.STRING,
//                 allowNull : false,
//             },
//         },
//         {
//             freezeTableName : true,
//             paranoid        : false,
//             underscored     : true,
//             timestamps      : false,
//         }
//     );
// };

const mongoose = require('mongoose');
const memberSchema = require('./Members');
const Schema = mongoose.Schema;

const batchesSchema = new Schema({
    id      : Schema.Types.ObjectId,
    name    : {type : String, required : true},
},{
    versionKey : false
});

module.exports = mongoose.model('Batch', batchesSchema);

// const { DataTypes } = require('sequelize');

// module.exports = function (sequelize) {
//     return sequelize.define(
//         'Members',
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

//             email : {
//                 type      : DataTypes.STRING,
//                 allowNull : false,
//                 unique    : true,
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
const batchesSchema = require('./Batches');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    id           : Schema.Types.ObjectId,
    name         : {type : String, required : true},
    email        : {type : String, required : true, unique : true},
    password     : {type : String, required : true},
    refreshToken : {type : String},
    staff        : {type : Boolean, default : false},
    pairHistory  : {type : Array},
    batch        : {type : String},
}, {
    versionKey : false
});

module.exports = mongoose.model('Member', memberSchema);
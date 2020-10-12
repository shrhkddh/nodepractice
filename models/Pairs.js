// const { DataTypes } = require('sequelize');

// module.exports = function (sequelize) {
//     return sequelize.define(
//         'Pairs',
//         {
//             id : {
//                 type          : DataTypes.INTEGER,
//                 primaryKey    : true,
//                 autoIncrement : true,
//             },
//             member1 : {
//                 type      : DataTypes.STRING,
//                 allowNull : false,
//             },
//             member2 : {
//                 type      : DataTypes.STRING,
//                 allowNull : false,
//             },
//             member3 : {
//                 type      : DataTypes.STRING,
//                 allowNull : true,
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
const Schema = mongoose.Schema;

const pairsSchema = new Schema({
    id   : Schema.Types.ObjectId,
    pair : {type : Array, required : true},
    week : {type : Number},
},{
    versionKey : false
});

module.exports = mongoose.model('Pairs', pairsSchema);
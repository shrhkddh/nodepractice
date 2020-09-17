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

const pairsSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    member1 : {type : String, required : true},
    member2 : {type : String, required : true},
    member3 : String,
},{
    versionKey : false
});

module.exports = mongoose.model('Pairs', pairsSchema);
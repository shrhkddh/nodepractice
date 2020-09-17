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

const memberSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    staff : {type : Boolean, default : false},
}, {
    versionKey : false
});

module.exports = mongoose.model('Member', memberSchema);
// const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;

// const group9Schema = new Schema({
//     groupID : {
//         type    : String,
//         defualt : '9기',
//     },
//     name : {
//         type     : String,
//         required : true,
//     },
//     email : {
//         type     : String,
//         required : true,
//     }
// });

// module.exports = mongoose.model('Group9', group9Schema);

const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        "wecodeGroup",
        {
            group : {
                type      : DataTypes.STRING,
                allowNull : false,
            },

            name : {
                type      : DataTypes.STRING,
                allowNull : false,
            },

            email : {
                type      : DataTypes.STRING,
                allowNull : false,
            },
        },
        {
            freezeTableName : true,
            paranoid : true,
            underscored : true,
            timestamps : true,
            createdAt : "created_at",
            updatedAt : "updated_at",
            deletedAt : "deleted_at",
        }
    );
};
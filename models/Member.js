const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'Members',
        {
            id : {
                type          : DataTypes.INTEGER,
                primaryKey    : true,
                autoIncrement : true,
            },
            name : {
                type      : DataTypes.STRING,
                allowNull : false,
            },

            email : {
                type      : DataTypes.STRING,
                allowNull : false,
                unique    : true,
            },
        },
        {
            freezeTableName : true,
            paranoid        : false,
            underscored     : true,
            timestamps      : false,
            // createdAt: "created_at",
            // updatedAt: "updated_at",
            // deletedAt: "deleted_at",
        }
    );
};

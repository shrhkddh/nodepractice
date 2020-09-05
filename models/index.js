const sequelize = require('../database');

const sequelizeModels = function ({ sequelize, models }) {
    return models.reduce((sequelized, model) => {
        return {
            ...sequelized,
            [model] : require(`./${model}`)(sequelize),
        };
    }, {});
};

const models = ['Group', 'Member'];
const model = sequelizeModels({ sequelize, models });

console.log(model);

// model.Member.hasOne(model.Group);
// model.Group.belongsTo(model.Member);
model.Group.hasMany(model.Member);
model.Member.belongsTo(model.Group);

module.exports = { sequelize, model };
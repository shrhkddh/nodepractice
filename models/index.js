const sequelize = require('../database');

const sequelizeModels = function ({ sequelize, models }) {
    return models.reduce((sequelized, model) => {
        return {
            ...sequelized,
            [model] : require(`./${model}`)(sequelize),
        };
    }, {});
};

const models = ['Batches', 'Members'];
const model = sequelizeModels({ sequelize, models });

console.log(model);

// model.Member.hasOne(model.Group);
// model.Group.belongsTo(model.Member);
model.Batches.hasMany(model.Members);
model.Members.belongsTo(model.Batches);

module.exports = { sequelize, model };
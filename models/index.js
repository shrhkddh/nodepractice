// const sequelize = require('../database');

// const sequelizeModels = function ({ sequelize, models }) {
//     return models.reduce((sequelized, model) => {
//         return {
//             ...sequelized,
//             [model] : require(`./${model}`)(sequelize),
//         };
//     }, {});
// };

// const models = ['Batches', 'Members', 'Weeks', 'Pairs'];
// const model = sequelizeModels({ sequelize, models });

// model.Batches.hasMany(model.Members);
// model.Members.belongsTo(model.Batches);

// model.Batches.hasMany(model.Pairs);
// model.Pairs.belongsTo(model.Batches);

// model.Weeks.hasMany(model.Pairs);
// model.Pairs.belongsTo(model.Weeks);

// module.exports = { sequelize, model };

const Batches = require('./Batches');

module.exports = { Batches };
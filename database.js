// const mongoose = require('mongoose');

// module.exports = mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser    : true,
//     useUnifiedTopology : true,
//     useFindAndModify   : false,
//     useCreateIndex     : true,
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect  : 'mysql',
    logging  : false,
    host     : process.env.HOST,
    database : process.env.DATABASE,
    username : 'root',
    password : process.env.MYSQL_PASSWORD,
    port     : process.env.MYSQL_PORT
});

module.exports = sequelize;
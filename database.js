// const mongoose = require('mongoose');

// module.exports = mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser    : true,
//     useUnifiedTopology : true,
//     useFindAndModify   : false,
//     useCreateIndex     : true,
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "wecode_group",
    "root",
    process.env.MYSQL_PASSWORD,
    {
        host    : 'localhost',
        port    : 3306,
        logging : true,
        dialect : 'mysql',
    }
);

module.exports = sequelize;
require('dotenv').config();
const app      = require('./app');
const http     = require('http');
const server   = http.createServer(app);
const {mongoose, redis} = require('./database');


(async function () {
    try {
        await mongoose;
        console.log('MONGODB CONNECTED');

        server.listen(process.env.PORT, () => {
            console.log(`SERVER IS LISTENING TO PORT: ${process.env.PORT}`);
        });

        await redis;
        console.log('REDISDB CONNECTED');

        
    } catch (err) {
        console.log('DB CONNECTION ERROR');
        console.log(err);
    }
})();

// async function () {}
// "Mysql server"
// require('dotenv').config();
// const app           = require('./app');
// const http          = require('http');
// const server        = http.createServer(app);
// const { sequelize } = require('./models');


// (async function () {
//     try {
//         await sequelize.authenticate();
//         await sequelize
//         .sync({ force : true, alert : true })
//         .then(() => console.log("DB SYNCED"));

//     server.listen(process.env.PORT, () => {
//         console.log(`SERVER IS LISTENING TO PORT: ${process.env.PORT}`);
//         });
//     } catch (err) {
//         console.log("DB CONNECTION ERROR");
//         console.log(err);
//     }
// })();
const jwt = require('jsonwebtoken');
const redis = require('../database');

const tokenTest = async function (req, res, head) {
    try{
        const auth = req.headers['authorization'];
        const decodeAccessAuth = jwt.verify(auth, process.env.SECRET_KEY);

    } catch (err) {
        console.log(err)
    }
};

module.exports = tokenTest
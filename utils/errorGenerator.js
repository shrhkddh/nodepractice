module.exports = function ( message, status = 500) {
    const error = new Error(message);
    error.statusCode = status;
    throw error;
};
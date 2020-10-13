const errorGenerator   = require('./errorGenerator');
const savePair         = require('./savePair');
const filterDuplicates = require('./filterDuplicate');
const shuffle          = require('./shuffle');
const groupStudents    = require('./groupStudent');
const csvconverter     = require('./csvconverter');

module.exports = {
    errorGenerator,
    shuffle,
    savePair,
    groupStudents,
    csvconverter,
    filterDuplicates
};
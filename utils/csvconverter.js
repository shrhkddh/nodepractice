const csvToJson = require('csv-file-to-json');
const fs = require('fs');
const batch = require('../models/Batches');


const makeJson = async () => {
    const data = csvToJson({ filePath : '/Users/nogwang-o/nodepractice/wecodeGroups.csv'});
    
    try {
        data.splice(0, 1);
        fs.writeFileSync('wecodeMember.json', JSON.stringify(data) + `\n`);
    } catch (err) {
        console.log(err)
    }
}

module.exports = makeJson;

// makeJson();

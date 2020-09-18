const { Pairs }  = require('../DAO');

const groupStudents = ( list, j ) => {
    let obj = {};
    let shuffledList = list;
    let i = 0;

    while (shuffledList.length > 0) {
        if (shuffledList[1] === undefined) {
            obj[i - 1].push(shuffledList[0]);
            break;
        }

        obj[i] = [shuffledList[0], shuffledList[1]];
        // if (shuffledList.length === 3) {
        //     Pairs.save((j+1), shuffledList[0].batch_id, shuffledList[0].name, shuffledList[1].name, shuffledList[2].name);
        //     break;
        // }
        // Pairs.save((j+1), shuffledList[0].batch_id, shuffledList[0].name, shuffledList[1].name);

        shuffledList.splice(0, 2);
        i++;
    }
    return obj;
};

module.exports = groupStudents;

// }
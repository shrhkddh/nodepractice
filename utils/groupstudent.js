"use strict";
const shuffleing = require('./shuffle');
const groupStudents = (list) => {
    let obj = {};
    let shuffledList = shuffleing(list);
    let i = 0;
    while (shuffledList.length > 0) {
        if (shuffledList[1] === undefined) {
            obj[i - 1].push(shuffledList[0]);
            break;
        }
        obj[i] = [shuffledList[0], shuffledList[1]];
        shuffledList.splice(0, 2);
        i++;
    }
    return obj;
};
module.exports = groupStudents;

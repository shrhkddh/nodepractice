const { Pairs } = require('../DAO');
const { 
    errorGenerator,
    groupStudents,
    shuffle,
    firstRun 
} = require('../utils');

const getPairs = async function (req, res, next) {
    try {
        const [batchmembers] = await Pairs.findByBatchId(req.params.id);
        const [weekID]       = await Pairs.findByWeekId();
        const week           = Object.keys(weekID).length;
        
        let pairs = [];
        for (let j = 0; j < week; j++){
            let shuffledList = shuffle(batchmembers);
            let shuffling    = groupStudents(shuffledList, j);
            let firstShuffle = firstRun(shuffling);

            // console.log("First Result : ", firstShuffle);

            pairs.push('Week' + (j+1), firstShuffle );
        };

        
        // res.status(200).json({ massage : "shuffle Test" });
        res.status(200).json({ pairs });
    } catch (err) {
        next(err);
    }
};

module.exports = {getPairs};
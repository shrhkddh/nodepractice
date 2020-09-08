const { Pairs } = require('../DAO');
const { errorGenerator, shuffle } = require('../utils');

const getPairs = async function (req, res, next ) {
    try {
        const [batchmembers] = await Pairs.findByBatchId(req.params.id);
        const [weekID] = await Pairs.findByWeekId();
        console.log("R U WeekID?? : ",weekID);
        
        const groupStudents = list => {
            let obj = {};
            let shuffledList = shuffle(list);
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

        const pairs = groupStudents(batchmembers);
        // const pairsDB = pairs.save();
        
        // res.status(200).json({ massage : "shuffle Test" });
        res.status(200).json({ pairs });
    } catch (err) {
        next(err);
    }
};

module.exports = {getPairs};
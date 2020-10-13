const Member = require('../models/Members');

const savePair = async ( groupStudent ) => {
    const newGroup = groupStudent;
    const matchHistory = {};
    try{
        for (let group in  newGroup) {
            const groupArr = newGroup[group];
            const member1 = groupArr[0];
            const member2 = groupArr[1];

            if (groupArr[2]) {
                const member3 = groupArr[2];
                
                matchHistory[member1] = [member2, member3];
                await Member.update(
                    {name : member1.name},
                    {$push : { pairHistory : [[member2, member3]] }}
                    );
                matchHistory[member2] = [member1, member3];
                await Member.update(
                    {name : member2.name},
                    {$push : { pairHistory : [[member1, member3]] }}
                    );
                matchHistory[member3] = [member1, member2];
                await Member.update(
                    {name : member3.name},
                    {$push : { pairHistory : [[member1, member2]] }}
                    );
            } else {
                matchHistory[member1] = [member2];
                await Member.update(
                    {name : member1.name},
                    {$push : { pairHistory : [[member2]] }}
                    );
                matchHistory[member2] = [member1];
                await Member.update(
                    {name : member2.name},
                    {$push : { pairHistory : [[member1]] }}
                    );
            }
        };
        return matchHistory;
    } catch (err) {
        console.log(err);
    }
};

module.exports = savePair;
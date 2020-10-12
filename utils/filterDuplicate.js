const Member = require('../models/Members');
const groupStudent  = require('./groupStudent');

const filterDuplicate = async (list, body) => {
    try {
        let newGroup = groupStudent(list);

        const firstMember = await Member.findOne(
            {batch : body.batch},
            {_id : 0, name : 1, pairHistory : 1}
        )
        const testData = firstMember.pairHistory.length

        if(testData != 0){
            for (let group in newGroup) {
                const groupArr = newGroup[group];
                const member1 = groupArr[0].name;
                const member2 = groupArr[1].name;

                const [member1List] = await Member.find(
                    {name : member1},
                    {_id : 0, name : 1, pairHistory : 1}
                );
                const [member1Hisotry] = member1List.pairHistory
                // console.log('what is this? :', typeof(member1Hisotry))
                
                const [member2List] = await Member.find(
                    {name : member2},
                    {_id : 0, name : 1, pairHistory : 1}
                );
                const [member2Hisotry] = member2List.pairHistory

                if (groupArr[2]) {
                    const member3 = groupArr[2].name;
                    const [member3List] = await Member.find(
                        {name : member3},
                        {_id : 0, name : 1, pairHistory : 1}
                    );
                    const [member3Hisotry] = member3List.pairHistory
                    
                    member1Hisotry.forEach(element => {
                        if (element.name === member2 || element.name === member3) return filterDuplicate(list, body);
                    });

                    member2Hisotry.forEach(element => {
                        if (element.name === member1 || element.name === member3) return filterDuplicate(list, body);
                    });

                    member3Hisotry.forEach(element => {
                        if (element.name === member1 || element.name === member2) return filterDuplicate(list, body);
                    });
                }
                
                member1Hisotry.forEach(element => {
                    if (element.name === member2) return filterDuplicate(list, body);
                })
            }
        }
        return newGroup;
    } catch (err) {
        console.log(err)
    };
};

module.exports = filterDuplicate;
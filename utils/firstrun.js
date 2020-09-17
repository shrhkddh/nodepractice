const firstRun = ( shuffling ) => {
    const newGroup = shuffling;
    const matchHistory = {};

    for (let group in  newGroup) {
        const groupArr = newGroup[group];
        const member1 = groupArr[0];
        const member2 = groupArr[1];

        console.log("GroupArr is : ", groupArr);

        if (groupArr[2]) {
            const member3 = groupArr[2];

            matchHistory[member1] = [member2, member3];
            matchHistory[member2] = [member1, member3];
            matchHistory[member3] = [member1, member3];
        } else {
            matchHistory[member1] = [member2];
            matchHistory[member2] = [member1];
        }
    };
    // console.log("Match History is : ", matchHistory);
};

module.exports = firstRun;
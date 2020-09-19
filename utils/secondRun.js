const secondRun = () => {
    const buffer = fs.readFileSync('경로'); // 1주차 코드카타 짝 또는 그 전까지의 코드카타 기록을 가져오는듯함
    const matchHistory = Json.parser(buffer);

    const filterDuplicates = () => {
        let newGroup = groupStudents(studendList); // controllers에서 처리할수 있게 생각해봐야 할듯

        for (let group in newGroup) {
            const groupArr = newGroup[group];
            const member1 = groupArr[0];
            const member2 = groupArr[1];
            
            if (groupArr[2]) {
                const member3 = groupArr[2];

                matchHistory[member1].forEach(name => {
                    if (name === member2 || name === member3) return filterDuplicates();
                });

                matchHistory[member2].forEach(name => {
                    if (name === member1 || name === member3) return filterDuplicates();
                });

                matchHistory[member3].forEach(name => {
                    if (name === member1 || name === member2) return filterDuplicates();
                });
            }
            if (
                matchHistory[member1].includes(member2) ||
                matchHistory[member2].includes(member1)
            )
            return filterDuplicates();
    }
    return newGroup;
    };
    const finalResult = filterDuplicates();

    for (let group in finalResult) {
        const groupArr = newGroup[group];
        const member1 = groupArr[0];
        const member2 = groupArr[1];

        matchHistory[member1].push(member2);
        matchHistory[member2].push(member1);

        if (groupArr[2]) {
            const member3 = groupArr[2];

            matchHistory[member1].push(member3);
            matchHistory[member2].push(member3);
            matchHistory[member3].push(member1,member2);
        }
    }
};

module.exports = secondRun;
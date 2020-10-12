const shuffle = (arr : any[]) => {
    let copy = arr.slice();

    for (let i = arr.length - 1; i > 0; i--){
        const j : number = Math.floor(Math.random() * i);
        const temp : String = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy
}

module.exports = shuffle;
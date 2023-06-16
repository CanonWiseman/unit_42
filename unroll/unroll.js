function unroll(squareArray) {

    let returnArr = [];

    while(squareArray.length > 0){
        returnArr = [...returnArr, squareArray.shift()];

        returnArr = [...returnArr, squareArray.map(row => row.pop())];

        returnArr = [...returnArr, squareArray.pop().reverse()];

        returnArr = [...returnArr, squareArray.map(row => row.shift()).reverse()];
    }
    
    return returnArr.flat();
}

module.exports = unroll;

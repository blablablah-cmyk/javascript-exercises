const sumAll = function(a,b) {
    let result = 0;
    if (a > b) {
        let temp = a; a = b; b = temp; 
    }
    for (let i = a; i <= b; i++) {
        result += i
    }
    console.log(result);
    return result;
};


// Do not edit below this line
module.exports = sumAll;

const reverseString = function(string) {
    let reString = ""
    for (let i = string.length -1; i >= 0; i--) {
        reString += string[i];
    }
    return reString;
};
// Do not edit below this line
module.exports = reverseString;

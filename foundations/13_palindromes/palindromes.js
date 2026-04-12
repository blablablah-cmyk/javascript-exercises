const palindromes = function (string) {
    let reString = string.split("").reverse().join("");
    if (string === reString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

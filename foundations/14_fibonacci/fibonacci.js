const fibonacci = function(num) {
    num = Number(num);
    let result = 0;
    let a = 1;
    let b = 1;

    if (num < 0 ) {
        return"OOPS";
    } /*else if ((num = 1)||(num = 2)) {
        return 1;
    }*/
   if (num==0) {
    return 0;
   }

    for (let i = 0; i < num-2; i++){
        result = a+b;
        a = b;
        b = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

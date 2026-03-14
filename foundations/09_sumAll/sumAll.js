const sumAll = function(int1, int2) {
    // Check if both are numbers, are integers, and are non-negative
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 < 0 || int2 < 0) return "ERROR";
    //make int 1 the smaller number
    if(int1 > int2){
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }

    let sum = 0;
    for(let i = int1; i <= int2; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

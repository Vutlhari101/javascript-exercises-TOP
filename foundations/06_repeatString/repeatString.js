const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    if(num == 1) return string;
    let stringToReturn = "";
    for(i = 0; i < num; i++){
        stringToReturn += string;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;

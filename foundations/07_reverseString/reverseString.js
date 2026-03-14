const reverseString = function(sequence) {
    let reversedWord = "";
    for(let i = sequence.length - 1; i >= 0; i--){
        reversedWord += sequence[i];
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;

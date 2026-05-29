const removeFromArray = function(arr, ...args) {
    let filteredArray = arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

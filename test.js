function nexInLine(arr, item) {

    arr.push(item);
    itemLost = arr.shift();
    return itemLost;

}


var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nexInLine(testArr, 10));
console.log("After: " + JSON.stringify(testArr));
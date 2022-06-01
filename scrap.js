// const string = "XYZ 123 ABC 456 ABC 789 ABC";

// function getPosition(string, subString, index) {
//     console.log(string.split(subString, index));
//   return string.split(subString, index).join(subString).length;
// }

// console.log(
//   getPosition(string, 'ABC', 2) // --> 16
// )


const array = [0,0,1,0,0,0,1,1,0,0,1,0];

const getIndex = (array, divider, limit) => {
    console.log(array.join("").split(divider, limit));
    console.log(array.join("").split(divider, limit).join(divider));
    return array.join("").split(1, limit).join(1).length;
}
console.log(getIndex(array, 1, 1));
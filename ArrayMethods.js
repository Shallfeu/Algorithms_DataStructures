const array = [1, 2, 3, 4, 5];

// 1 forEach - just iterations in array
array.forEach((item, index, array) => item);

// 2 map - create new array
const newArray = array.map((item, index, array) => item);

// 3 reduce - iteration in array and return new structure of data
const smth = array.reduce((accumulator, item, index, array) => {
  accumulator[item] = index;
  return accumulator;
}, {});

// 4 find - find an element that you need
const neededEl = array.find((item, index, array) => item === 3);

// 5 findIndex - find an index of element that you need
const neededIn = array.findIndex((item, index, array) => item === 3);

// 6 filter - filter your massive by order
const filteredAr = array.filter((item, index, array) => item > 3);

// 7 push - append elements in the end of the array
const newLengthArray = array.push(6); // mutate initial array, return length of new array

// 8 unshift - append elements in the beggining of the array
const newLengthArr = array.unshift(0); // return length of new array

// 9 pop - remove element from the end of the array
const lastEl = array.pop(); // mutate, return the last element that removed

// 10 shift - remove element from the beggining of the array
const firstEl = array.shift(); // mutate, return the first element that removed

// 11 concat - create a new array with new element in the end
const newArr = array.concat([7, 8, 9]); // NO MUTATIONS

// 12 join - transform array to string
const str = '123456';
const strArr = str.split('');
const newStr = strArr.join('-');

// 13 sort - sort your array
const test = [5, 8, 1, 7, 3, 4, 9, 6, 1, 7];
test.sort((a, b) => b - a); //mutate

// 14 isArray - check is it array
Array.isArray(array);

// 15 splice - remove and insert elements //mutate
const indexElem = 1;
const deleteCount = 5;
const insertElems = 10;
array.splice(indexElem, deleteCount, insertElems, 2, 3, 4, 5);

// 16 slice - return new array from old array
const arr = array.slice(2, 4);
// console.log([1, 2, 3, 4, 5].slice(2, -2)); //[3]
// console.log([1, 2, 3, 4, 5].slice(-3)); //[ 3, 4, 5 ]

// 17 indexOf - return index of element that we need
const foundIn = [1, 5, 3, 4, 5].indexOf(5);
console.log(foundIn);
// 18 lastIndexOf - return last index from the end
const lastFound = [1, 5, 3, 4, 5].lastIndexOf(5);
console.log(lastFound);
// 19 includes - check something in something
console.log([1, 2, 3, 4, 5].includes(8));
console.log([1, 2, 3, 4, 5].includes(2, 2));
console.log([1, 2, 3, 4, 5].includes(6));

// 20 reverse - reverse array
console.log([1, 2, 3, 4, 5].reverse()); //mutate

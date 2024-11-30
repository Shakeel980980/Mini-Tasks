let fruits = ['apple','mango','banana','pineapple','orange'];
let numbers = [1,2,3,4,5,6,7,8,9];
 console.log(numbers);

console.log(Array.isArray(numbers)); // check this is array or not

numbers.push(50); // add number at last index of array 
console.log(numbers);

numbers.pop(); // remove a number from the last index of array
console.log(numbers);

numbers.shift(); // remove data from 0 index;
console.log(numbers);

numbers.unshift(25); // add data at 0 index;
console.log(numbers);

numbers.splice(1, 2);  // remove data from 1 index to 2 index;
console.log(numbers);

numbers.toString(); // this provide us same copy of arary but if we change in one copy then automatically changed in second copy;
console.log(numbers);

numbers.sort(); // arrange data in assending order
console.log(numbers);

numbers.valueOf(); // get array itself
console.log(numbers);

console.log(fruits.join(' , '));
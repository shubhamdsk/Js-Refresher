let num = [1,2,3,45,67,89];

// return string representation of array
let b = num.toString();
console.log(b , typeof b);

// join the array elements by specified item
let c = num.join("-");
console.log(c);

// removes the last element and return it and make changes in original array
let p = num.pop();
console.log(num,p);

// add new element at last position and returns new arrray length
let s = num.push(56);
console.log(num,s)

// removes the first element and return it and make changes in original array
let d = num.shift();
console.log(num,d);

// add new element at first position and returns new arrray length
let k = num.unshift(56);
console.log(num,k)
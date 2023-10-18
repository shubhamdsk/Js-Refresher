/*
var - function scope
let and const - block scope
*/
var name1 = "shubham";
name1 = "dsk";
console.log(name1);

let name2 = "shubham";
name2 = "dsk";
console.log(name1);

const name3 = "shubham";
// name3 = "dsk"; //giving error
console.log(name3);

// Block Scope - let and Const
function modJs(love) {
  if (love) {
    let name = "shubham";
    const sname = "deshmukh";
    console.log("My name is " + name + " " + sname);
  }
}
modJs(true);

// Due to Block Scope this program wiill give the Error
function modJs(love) {
  if (love) {
    let name = "shubham";
    const sname = "deshmukh";
  }
  console.log("My name is " + name + " " + sname);
}
modJs(true);

// function scope
function modJs(love) {
  if (love) {
    var name = "shubham";
    var sname = "deshmukh";
    console.log("My name is " + name + " " + sname);
  }
}
modJs(true);

// working properly - function scope
function modJs(love) {
  if (love) {
    var name = "shubham";
    var sname = "deshmukh";
  }
  console.log("My name is " + name + " " + sname);
}
modJs(true);



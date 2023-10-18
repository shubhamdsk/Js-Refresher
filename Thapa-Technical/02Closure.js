/* 1.A closureis the combination of a funnction bundled
 together with references to its surrounding state.
 2.Closure are created every time a function is created, 
 at function creation time
 */

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  //   inner();
  return inner;
}
// outer();
const fn = outer();
fn();
fn();

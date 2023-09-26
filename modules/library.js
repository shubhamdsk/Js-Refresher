let message = 'ES 6 Modules';
function user (name) {
  // console.log(`Hello ${name}`);
  return `Hello ${name}`;
}
class test {
  constructor () {
    console.log ('Constructor');
  }
}
export {message, user, test};


export default function(){
    console.log("Hello ");
}
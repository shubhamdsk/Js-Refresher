const promiseOne = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("Hello World");
      resolve();
   }, 1000)
})
promiseOne.then(() => {
   console.log('Promise called');
})

const promiseTwo = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("Promise two");
      resolve({ username: 'shubhamdsk', password: '1709' })
   }, 1000)
})

promiseTwo.then((input) => {
   console.log({ input })
})

const promiseThree = new Promise((resolve, reject) => {
   const error = false;
   if (!error) {
      console.log("Promise three");
      resolve({ username: 'shubhamdsk', password: 1709 })
   } else {
      console.log("Something went wrong !")
   }
});
promiseThree.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log({ username })
}).catch((error) => console.log(error)).finally('Promise has been resolved or rejected')
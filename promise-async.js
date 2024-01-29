const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
async function getDataCookies() {
   await setTimeout(function () {
     let container = document.getElementById('container');
     cookies.forEach(function (ele, index) {
       console.log(ele.name);
       container.innerHTML += `<div>${ele.name}</div>`;
     });
   }, 1000);
 }
 
 function createCookies() {
   return new Promise(function (resolve, reject) {
     //adjcnjkancdkjnkkc take some time
 
     setTimeout(function () {
       let codeReadingStarted = true;
 
       if (codeReadingStarted == true) {
         cookies.push(newCookie);
         console.log(cookies);
         return resolve('Data successfully added'); //success
       } else {
         return reject('Data could not be added'); //failure
       }
     }, 2000);
   });
 }
 
 async function call() {
   await createCookies();
   getDataCookies();
 }
   // Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function

// calling the new async function


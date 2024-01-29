const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
  // Progression 2: using setTimeout() -- use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.

    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`


async function getDataCookies() {
  await setTimeout(function () {
    let container = document.getElementById('container');
    cookies.forEach(function (element) {
      console.log(element.name);
      container.innerHTML += `<div>${element.name}</div>`;
    });
  }, 1000);
}

function createCookies() {
  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      let functionexecution = true;

      if (functionexecution == true) {
        cookies.push(newCookie);
        console.log(cookies);
        return resolve('Data successfully added'); 
      } else {
        return reject('Data could not be added'); 
      }
    }, 2000);
  });
}

createCookies().then(function (response) {
    getDataCookies();
    console.log(response);
  }).catch(function (er) {
    console.log(er);
  });

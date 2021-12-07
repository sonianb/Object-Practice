//a function that returns a new object with the same key-value pairs and all the keys have been capitalised

function capitaliseKeys(obj) {
    //retrieve all of the key names from an object, returns an array
    Object.entries(obj);
    //store the array
    let myArray = Object.entries(obj);
    //use map to transform the key to Uppercase, store the array in a new variable(myNewArr)
    let myNewArr = myArray.map(elem => [elem[0].toUpperCase(), elem[1]]);
    //return an object from the array
     return Object.fromEntries(myNewArr);
}

//stringToObject should return an object made up of the key-value pairs in the string
function stringToObject(str) {
    let pairs = str.split(',');
    console.log(pairs);

    let prop = pairs.map(elem => elem.split(":"));
    console.log(prop);
    const obj = Object.fromEntries(prop);
    console.log(obj);
  };
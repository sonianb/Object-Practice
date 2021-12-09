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

    let prop = pairs.map(elem => elem.split(":"));

    const obj = Object.fromEntries(prop);

  };

  //shoppingList function should return an object where the keys are the ingredient names, and the values are the number of the ingredients needed.

function shoppingList(str) {
  let arrayOfElems = str.split(", ");
  
  let arrayOfKeyValues = arrayOfElems.map(elem => elem.split(" "));

  let filteredArr = arrayOfKeyValues.filter(elem => elem[0] !== "0")

  let reversedArr = filteredArr.map(elem => elem.reverse());

  return Object.fromEntries(reversedArr);

}

// mapObject function should return a new object whose keys are the same as those of obj, and whose values are the result of calling fn with the values of obj.

function mapObject(obj, fn) {
  let keyValuePairs = Object.entries(obj);

  let callFn = keyValuePairs.map(elem => [elem[0],fn(elem[1])] );

 return Object.fromEntries(callFn);

 }
 
 
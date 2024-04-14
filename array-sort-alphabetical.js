function sortAlphabetically(array) {
  array.sort((a, b) => a.localeCompare(b)); 
}

// USAGE:

let array = ["b","a","c","u","f"];
sortAlphabetically(array);

// OUTPUT : ["a", "b", "c", "f", "u"]

Array.prototype.SortAlphabetical = function() {
  return this.sort((a, b) => a.localeCompare(b)); 
}

// USAGE:

["b","a","c","u","f"].SortAlphabetical();    // OUTPUT : ["a", "b", "c", "f", "u"]

Array.prototype.nthIndexOf = function(pattern, n) {
  if (n) {
    let i = -1;
    while (n-- && i++ < this.length) {
      i = this.indexOf(pattern, i);
      if (i < 0) break;
    }
	return i;
  } else {
    const indexes = [];
    for(let i = 0 ; i < this.length ; i++) {
        if (this[i] === pattern) indexes.push(i);
	}
    return indexes;
  }
}

// USAGE:

const arr = ["q","w","e","r","t","y","q","e"];

// Get all indexes of the letter "e"
arr.nthIndexOf("e");    // OUTPUT: [2,7]

// With a second parameter, get the index of the nth letter "q" (second one in this example)
arr.nthIndexOf("q",2);  // OUTPUT: 6

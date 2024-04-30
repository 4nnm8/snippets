Array.prototype.nthIndexOf = function(pattern, nth) {
	const   isAnArray = Array.isArray(pattern),
		isNbOrStr = pattern.substring || pattern.toFixed;
	if (nth) {
		let index = -1;
		while (nth-- && index++ < this.length) {
			index = this.indexOf(pattern, index);
			if (index < 0) break;
		}
		return index
	} else {
		const indexes = [];
		for (let i = 0 ; i < this.length ; i++) {
			if (isAnArray) {
				if (pattern.includes(this[i])) 	indexes.push(i);
			} else {
				if (this[i] === pattern) indexes.push(i);
			}
		}
		return indexes.length === 0 ? -1 : indexes.length === 1 ? indexes[0] : indexes;
	}
}

// USAGE:

const arr = ["q","w","e","r","t","y","q","e"];

// Get all indexes of the letter "e"
arr.nthIndexOf("e");    // OUTPUT: [2,7]

// Get all indexes of letter "e" and "q"
arr.nthIndexOf(["e","q"]);	// OUTPUT: [0,2,6,7]

// With a second parameter, get the index of the nth letter "q" (second one in this example)
arr.nthIndexOf("q", 2);  // OUTPUT: 6

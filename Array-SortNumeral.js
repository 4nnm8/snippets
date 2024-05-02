Array.prototype.SortNumerals = function(s) {
	if (this.some(isNaN) || (s === "strict" && this.some(x => x.substring))) throw new Error("NaN in array.");
	return this.sort((a, b) => a - b);
}

// USAGE:

[2,"18",5,12,3].SortNumerals();         // OUTPUT: [2,3,5,12,"18"]

[2,"18",5,12,3].SortNumerals("strict"); // OUTPUT: Uncaught Error: NaN in array.

[2,"a",5,12,"b"].SortNumerals();        // OUTPUT: Uncaught Error: NaN in array.


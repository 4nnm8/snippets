Number.prototype.Ordinal = function(s) {
	return (s === "set" ? this : "") + (({
		  1: "st",
		  2: "nd",
		  3: "rd"
	})[this] || "th");
}

// USAGE:

 (1).Ordinal();      // --> "st"
(34).Ordinal();      // --> "th"
(3).Ordinal("set");  // --> "3rd"


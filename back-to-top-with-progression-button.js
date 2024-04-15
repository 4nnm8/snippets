document.querySelector(".container").addEventListener("scroll", function() {
	const top = this.scrollTop,
		    link = document.querySelector("a#link-to-top");
	link.style.setProperty("--angle", Math.round(top * 360 / this.offsetHeight) + "deg");
});

// DEMO AND STYLES HERE : https://codepen.io/Anonyme-the-builder/pen/NWmXKxV

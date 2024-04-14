function debounce(fn, delay) {
	delay = delay || 100;
	let timer;
	return function(event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(fn, delay, event);
	}
}

// USAGE:

window.addEventListener("resize", debounce(() => {
  // actions */
}, 500);

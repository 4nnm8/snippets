function setAttributes(element, attributes) {
	for(var key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// USAGE:

setAttributes(document.querySelector("input.name"), {
  "maxlength": "20",
  "aria-label": "Your name",
  "required": ""
});

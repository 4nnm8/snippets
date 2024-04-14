document.getElementById("background-video").addEventListener("loadeddata", function(event) {
  this.play().catch(error => {
    if (error.name === "NotAllowedError" || error.name === "NotSupportedError") {
		  console.error("Autoplay is not allowed or not supported");
	  }
  });
});

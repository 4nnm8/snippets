const toTopLink = document.getElementById("link-to-top");

document.querySelector(".container").addEventListener("scroll", function() {
  const mainHeight = document.querySelector("main").offsetHeight,
        progression = this.scrollTop / mainHeight;
  toTopLink.style.setProperty("--angle", progression * 360 + "deg");
  
  // Optionnal: to see the percent of scroll progression in the button instead of a triangle
  toTopLink.dataset.percent = Math.round(progression * 100);
})

// DEMO AND STYLES HERE : https://codepen.io/Anonyme-the-builder/pen/NWmXKxV

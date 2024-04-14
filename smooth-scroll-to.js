document.addEventListener("click", event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor) {
    event.preventDefault();
    document.getElementById(anchor.href.split("#")[1]).scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: start /* or center, end, nearest */
    });
  }
});

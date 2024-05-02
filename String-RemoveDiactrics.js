String.prototype.RemoveDiactrics = function() {
  return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// USAGE:

"Bonne journée !".RemoveDiactrics();  // OUTPUT: "Bonne journee !"



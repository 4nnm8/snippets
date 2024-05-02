Number.prototype.NormalizeAngle = function() {
  return (this % 360 + 360) % 360
}

// USAGE: 

(420).normalizeAngle();  // OUTPUT: 60

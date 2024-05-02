Number.prototype.NormalizeAngle = function() {
  return (this % 360 + 360) % 360
}

// USAGE: 

(420).NormalizeAngle();  // OUTPUT: 60

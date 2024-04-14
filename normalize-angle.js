function normalizeAngle(angle)
  return (angle % 360 + 360) % 360
}

// USAGE: 

normalizeAngle(420) 

// OUTPUT: 60

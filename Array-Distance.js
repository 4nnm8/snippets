Array.prototype.Distance = function(start,end) {
  const s = this.indexOf(start), e = this.indexOf(end);
  return (s === -1 || e === -1) ? false : Math.abs(e - s);
}

// USAGE:
const arr = ["09:00","10:00","12:00","13:00","14:00","17:00"];

arr.Distance("10:00","14:00");  // OUTPUT: 3
arr.Distance("17:00","09:00");  // OUTPUT: 5
arr.Distance("13:00","22:00");  // OUTPUT: false

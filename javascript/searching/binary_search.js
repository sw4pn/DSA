function binarySearch(array, searchValue) {
  // First, we establish the lower and upper bounds of where the value we're searching for can be
  // To start, the lower bound is the first value in the array, and the upper bound is the last value
  let lowerBound = 0;
  let upperBound = array.length - 1;

  // We begin a loop in which we keep inspecting the middlemost
  // between the upper and lower bounds
  while (lowerBound <= upperBound) {
    // We find the midpoint between the upper and the lower bounds
    // (We need to use Math.floor() to ensure the result is rounded down to the nearest integer.)

    let midpoint = Math.floor((upperBound + lowerBound) / 2);

    // We inspect the value at the midpoint:
    let valueAtMidpoint = array[midpoint];

    // If the value at the midpoint is the value we're looking for, we're done.
    // If not, we change the lower or upper bound based on whether we need to
    // guess higher or lower.

    if (searchValue === valueAtMidpoint) {
      return midpoint;
    } else if (searchValue < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (searchValue > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    }
  }
  //  If we've narrowed the bound until they've reached each other, that means that the
  // value we're searching for is not contained within this array:s
  return null;
}

const searchTerm = binarySearch([3, 17, 75, 80, 202], 17);
console.log(searchTerm);

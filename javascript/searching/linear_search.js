function linear_search(array, searchValue) {
  // We iterate through every element in the array
  for (let i = 0; i < array.length; i++) {
    // If we find the value we're looking for, we return the index
    if (array[i] === searchValue) {
      return i;
    }

    // If we reach an element that is greater than the search value, we can stop searching
    if (array[i] > searchValue) {
      break;
    }

    // We return nil if we don't find the value
    return null;
  }
}

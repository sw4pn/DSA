// function bubbleSort(list) {
//   const unsortedUntilIndex = list.length - 1;
//   let sorted = false;

//   while (!sorted) {
//     sorted = true;

//     for (let i = 0; i < unsortedUntilIndex; i++) {
//       if (list[i] > list[i + 1]) {
//         const temp = list[i];
//         list[i] = list[i + 1];
//         list[i + 1] = temp;
//         sorted = false;
//       }
//     }
//     unsortedUntilIndex -= 1;
//   }
// }

function bubbleSort(array) {
  let unsortedUntilIndex = array.length - 1;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }
    }
    unsortedUntilIndex -= 1;
  }

  return array;
}

const sortedArray = bubbleSort([65, 55, 45, 35, 25, 15, 10]);

console.log(sortedArray);

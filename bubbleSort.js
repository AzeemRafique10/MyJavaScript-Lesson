const array = [7, 8, 9, 10, 11, 12];

function bubbleSort(array) {
  for (let i = 1; i <= array.length; i++) {
    for (let j = 0; j <= array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let result = array[j];
        array[j] = array[j + 1];
        array[j + 1] = result;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));

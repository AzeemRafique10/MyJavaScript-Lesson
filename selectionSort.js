// Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Outerloop start from 0 index to last index
    let min = i; //minimum index to start from index
    for (let j = i + 1; j < arr.length; j++) {
      // Inner loop start for compare index values
      if (arr[min] > arr[j]) {
        // condition for compare index values
        min = j;
      }
    }
    let temp = arr[i]; // temporary array for compare index values
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

const unSortArray = [5, 7, 9, 1, 3, 4, 2, 6, 8];

const result = selectionSort(unSortArray);

console.log(result);

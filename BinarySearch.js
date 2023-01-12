function binarySearch(arr, searchNumber) {
  let left = -1;
  let right = arr.length;

  while (right - left > 1) {
    const middle = Math.floor((right + left) / 2);

    if (arr[middle] === searchNumber) return middle;
    if (arr[middle] > searchNumber) right = middle;
    else left = middle;
  }
  return -1;
}

const arr = [9, 3, 7, 4, 6, 6, 1, 0, 3];

const BubleSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[min_index]) min_index = j;
    }
    const temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
  return arr;
};

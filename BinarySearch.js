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

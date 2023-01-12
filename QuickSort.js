// O(log(n)*n)

const arr = [8, 2, 1, 5, 1, 9, 3, 7];

function quickSort(arr) {
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  if (arr.length < 2) return arr;

  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (pivotIndex === i) continue;
    if (arr[i] <= pivot) less.push(arr[i]);
    else greater.push(arr[i]);
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

function quickSort2(arr) {
  return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, left, right) {
  if (arr.length < 2) return arr;

  const index = partition(arr, left, right);

  if (left < index - 1) quickSortHelper(arr, left, index - 1);

  if (index < right) quickSortHelper(arr, index, right);

  return arr;
}

function partition(arr, left, right) {
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arr[pivotIndex];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort2(arr));

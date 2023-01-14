const example = [5, 6, 1, 6, -2, -11, 9, 2, 0];

// first itteration
// [5, 6, 1, 6, -2, -11, 9, 2, 0] => [5, 1, 6, -2, -11, 6, 2, 0, 9]

// second itteration
// [5, 1, 6, -2, -11, 6, 2, 0, 9] => [1, 5, -2, -11, 6, 2, 0, 6, 9]

// third itteration
// [1, 5, -2, -11, 6, 2, 0, 6, 9] => [1, -2, -11, 5, 2, 0, 6, 6, 9]

// fourth itteration
// [1, -2, -11, 5, 2, 0, 6, 6, 9] => [-2, -11, 1, 2, 0, 5, 6, 6, 9]

// fifth itteration
// [-2, -11, 1, 2, 0, 5, 6, 6, 9] => [-11, -2, 1, 0, 2, 5, 6, 6, 9]

// sixth itteration
// [-11, -2, 1, 0, 2, 5, 6, 6, 9] => [-11, -2, 0, 1, 2, 5, 6, 6, 9]

const BubbleSort = (arr) => {
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

const bubbleSort = (array) => {
  const len = array.length;
  let swapped = false;

  for (let i = 0; i < len - 1; i += 1) {
    swapped = false;
    for (let j = 0; j < len - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
};

bubbleSort(example);

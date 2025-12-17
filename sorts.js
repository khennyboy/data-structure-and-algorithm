// Bubble Sort
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Selection Sort
function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      //   console.log(arr);
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  result.push(...left.slice(i));
  result.push(...right.slice(j));
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log(left, "left");
  console.log(right, "right");
  return merge(mergeSort(left), mergeSort(right));
}

let res = merge([3, 39, 38, 43], [9, 10, 17, 82]);
console.log(res);

let sort1 = bubbleSort([4, 2, 6, 5, 1, 3]);
let sort2 = SelectionSort([4, 2, 6, 5, 1, 3]);
let sort3 = insertionSort([4, 2, 6, 5, 1, 3]);
console.log(sort1);
console.log(sort2);
console.log(sort3);
mergeSort([4, 2, 6, 5, 1, 3]);

console.log(btoa("I love programming"));
console.log(atob("SSBsb3ZlIHByb2dyYW1taW5n"));

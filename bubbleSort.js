function bubbleSort (arr) {
  for (let i = 0; i < arr.length -1; i++){
    console.log(i);
    for (let j = 0; j < arr.length - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([5, 8, 6, 3, 9, 2, 1, 7]));
// 原始实现：大循环N-1次
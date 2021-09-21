function bubbleSort (arr) {
  for (let i = 0; i < arr.length -1; i++){
    console.log(i);
    let isSorted = true
    for (let j = 0; j < arr.length - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
       isSorted = false
      }
    }
    if(isSorted) break
  }
  return arr
}
// console.log(bubbleSort([5, 8, 6, 3, 9, 1, 2, 7]));
// 原始实现：大循环N-1次 即7次
// 优化1.添加有序标记：一些情况可以提前结束循环 6次

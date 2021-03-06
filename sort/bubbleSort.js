function bubbleSort (arr) {
  for (let i = 0; i < arr.length/2; i++){
    console.log(i);
    let isSorted = true
    let sortBorder = arr.length - 1
    let lastChangePos = 0
    for (let j = 0; j < sortBorder-i; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        isSorted = false
        lastChangePos = j
      }
    }
    sortBorder = lastChangePos
    if (isSorted) break
    for (let j = sortBorder-i; j >i; j--){
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
        isSorted = false
        lastChangePos = j-1
      }
    }
    
  }
  return arr
}
console.log(bubbleSort([5, 8, 6, 3, 9, 2, 1, 7]));
console.log(bubbleSort([3, 2, 4, 1, 5, 6, 7, 8]));
console.log(bubbleSort([5, 6, 7, 8,1]));
// 原始实现：大循环N-1次 即7次
// 优化1.添加有序标记：一些情况可以提前结束循环 6次
// 优化2.界定数列有序区的边界:在每一轮排序中，处于sortBorder之后的元素无需比较，肯定是有序的
// 优化3.鸡尾酒排序：
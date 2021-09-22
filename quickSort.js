function quickSort(arr, startIndex, endIndex) {
  // 递归结束条件
  if (startIndex >= endIndex) return;
  // 得到基准元素位置
  let pivotIndex = partition(arr, startIndex, endIndex);
  // 用分治法递归数列的两部分
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
}

function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素
  let pivot = arr[startIndex];
  let left = startIndex;
  let right = endIndex;
  // 坑的位置，初始等于pivot的位置
  let index = startIndex;
  //大循环在左右指针重合或者交错时结束
  while (right >= left) {
    //right指针从右向左进行比较
    while (right >= left) {
      if (arr[right] < pivot) {
        arr[left] = arr[right];
        index = right;
        left++;
        break;
      }
      right--;
    }
    // console.log(JSON.stringify(arr));
    //left指针从左向右进行比较
    while (right >= left) {
      if (arr[left] > pivot) {
        arr[right] = arr[left];
        index = left;
        right--;
        break;
      }
      left++;
    }
    // console.log(JSON.stringify(arr));
  }
    arr[index] = pivot;
    return index;
}

let arr = [4, 7, 6, 5, 3, 2, 8, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
/**
[ 4, 7, 6, 5, 3, 2, 8, 1] left=0 right=7 index=0

[1, 7, 6, 5, 3, 2, 8, 1] 比较right值 left=1 right=7 index=7 移动数字1
[1, 7, 6, 5, 3, 2, 8, 7] 比较left值 left=1 right=6 index=1 移动数字7
[1, 2, 6, 5, 3, 2, 8, 7] 比较right值 left=1 right=5 index=1 不移动数字8
[1, 2, 6, 5, 3, 6, 8, 7] 比较right值 left=1 right=4 index=1 不移动数字6
[1, 2, 3, 5, 3, 6, 8, 7]
[1, 2, 3, 5, 5, 6, 8, 7]
[1, 2, 3, 5, 5, 6, 8, 7]
[1, 2, 3, 5, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 8, 7]
[1, 2, 3, 4, 5, 6, 7, 7]
[1, 2, 3, 4, 5, 6, 7, 7]
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
 */

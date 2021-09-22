// 集合栈代替递归的函数栈
function quickSort (arr, startIndex, endIndex) {
  let quickSortStack = []
  quickSortStack.push({ startIndex, endIndex });
  // 循环结束条件：栈为空时结束
  while (quickSortStack.length > 0) {
    // 栈顶元素出栈，得到起止下标
    let { startIndex: left, endIndex: right } = quickSortStack.pop()
    // 得到基准元素位置
    let pivotIndex = partition(arr, left, right)
    if (left < pivotIndex - 1) {
      quickSortStack.push({
        startIndex: left,
        endIndex: pivotIndex - 1
      })
    }
    if (right > pivotIndex + 1) {
      quickSortStack.push({
        startIndex: pivotIndex + 1,
        endIndex
      })
    }
  }
}
  function partition (arr, startIndex, endIndex) {
    // 取第一个位置的元素作为基准元素
    let pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;
    while (left != right) {
      //控制right指针比较并左移
      while (left < right && arr[right] > pivot) {
        right--;
      }
      //控制right指针比较并右移
      while (left < right && arr[left] <= pivot) {
        left++;
      }
      //交换left和right指向的元素
      if (left < right) {
        let p = arr[left];
        arr[left] = arr[right];
        arr[right] = p;
      }
      console.log(JSON.stringify(arr));
    }
    //pivot和指针重合点交换
    let p = arr[left];
    arr[left] = arr[startIndex];
    arr[startIndex] = p;
    return left;
  }

  let arr = [4, 7, 6, 5, 3, 2, 8, 1];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  /**
  [ 4, 7, 6, 5, 3, 2, 8, 1] left=0 right=7 index=0
  
  [4, 1, 6, 5, 3, 2, 8, 7]
  [4, 1, 2, 5, 3, 6, 8, 7]
  [4, 1, 2, 3, 5, 6, 8, 7]
  [4, 1, 2, 3, 5, 6, 8, 7]
  [3, 1, 2, 4, 5, 6, 8, 7]
  [2, 1, 3, 4, 5, 6, 8, 7]
  [1, 2, 3, 4, 5, 6, 8, 7]
  [1, 2, 3, 4, 5, 6, 8, 7]
  [1, 2, 3, 4, 5, 6, 8, 7]
  [
    1, 2, 3, 4,
    5, 6, 7, 8
  ]
   */


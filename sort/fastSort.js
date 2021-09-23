function fastSort (arr) {
  // 1.选定基准元素Pivot，并记住这个位置index，这个位置相当于一个“坑”。
  // 并且设置两个指针left和right，指向数列的最左和最右两个元素.
  let {index, pivot} = getRandom(arr)
  let left = 0, right = arr.length - 1
    function rightFn () {
      if (left == right) {
        arr[left] = pivot
        return
      }
      let rightV = arr[right]
      // 2.从right指针开始，把指针所指向的元素rightV和基准元素pivot做比较。
      if (rightV > pivot) {
        // rightV > pivot，则right指针向左移动；
        right--
        rightFn()
      } else {
        // rightV < pivot，则把right所指向的元素填入坑中。
        // 在当前数列中，1<4，所以把1填入基准元素所在位置，也就是坑的位置。这时候，元素1本来所在的位置成为了新的坑。同时，left向右移动一位。
        arr[index] = rightV
        left++
        index = right
      }
      // 此时，left左边绿色的区域代表着小于基准元素的区域。
    }
    function leftFn () {
      // 3.切换到left指针进行比较。
      if (left == right) {
        arr[left] = pivot
        return
      }
      let leftV = arr[left]
      if (leftV < pivot) {
        // leftV < Pivot，则left指针向右移动；
        left++
        leftFn()
      } else {
        // leftV > Pivot，则把left指向的元素填入坑中。
        // 在当前数列中，7>4，所以把7填入index的位置。这时候元素7本来的位置成为了新的坑。同时，right向左移动一位。
        arr[index] = leftV
        right--
        index = left
      }
      // 此时，right右边橙色的区域代表着大于基准元素的区域。
    }
    while (left != right) {
      rightFn()
      console.log(arr);
      leftFn()
      console.log(arr);
    }
    if (left == right) {
      arr[left] = pivot
      return arr
    }
}
// 随机选一个index
function getRandom (arr) {
  // let index = Math.floor(Math.random() * arr.length)
  let index = 0
  return {
    index,
    pivot: arr[index]
  }
}
// fastSort([4, 7, 6, 5, 3, 2, 8, 1])
console.log(fastSort([4, 7, 6, 5, 3, 2, 8, 1])
);
/**
[ 4, 7, 6, 5, 3, 2, 8, 1] left=0 right=7 index=0

[ 1, 7, 6, 5, 3, 2, 8, 1] 比较right值 left=1 right=7 index=7 移动数字1
[ 1, 7, 6, 5, 3, 2, 8, 7] 比较left值 left=1 right=6 index=1 移动数字7
[ 1, 2, 6, 5, 3, 2, 8, 7] 比较right值 left=1 right=5 index=1 不移动数字8
[ 1, 2, 6, 5, 3, 6, 8, 7] 比较right值 left=1 right=4 index=1 不移动数字6
[ 1, 2, 3, 5, 3, 6, 8, 7]
[ 1, 2, 3, 5, 5, 6, 8, 7]
[ 1, 2, 3, 4, 5, 6, 8, 7]

 */
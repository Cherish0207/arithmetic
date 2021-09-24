function buildHeap (list) {
  for (let i = Math.floor(list.length / 2 - 1); i >= 0; i--) {
    downAjust(list, i, list.length);
  }
}
/**
 * 
 * @param {*} list 待调整的堆
 * @param {*} parentIndex 要下沉的父亲节点
 * @param {*} length 堆的有效大小
 */
function downAjust(list, parentIndex, length) {
  let temp = list[parentIndex];
  let childIndex = parentIndex * 2 + 1;
  while (childIndex < length) {
    if (
      childIndex + 1<length &&
      list[childIndex] > list[childIndex + 1]
    ) {
      childIndex++;
    }
    if (temp <= list[childIndex]) break
    list[parentIndex] = list[childIndex];
    parentIndex = childIndex
    childIndex = parentIndex*2+1
  }
  list[parentIndex]= temp
}
// 下沉
// 思路 从最后一个父节点开始，下沉到不能再下沉为止，后到倒数第二个父节点
// 上浮
// 2n+1
// 思路 从最后一个子孩子开始while上浮，结束后不断往前
// index  奇数  index%2==1  右孩子 index=(parentIndex-1)*2+1 parentIndex=index/2+1/2
//        偶数  index%2==0  左孩子 index=parentIndex*2+1 parentIndex=index/2-1/2
// []
function getParentIndex(index) {
  return index%2==0 ? (index-2)/2 :(index-1)/2
}
function upAjust (list) {
  let childIndex = list.length - 1
  let parentIndex = getParentIndex(childIndex)
  let temp = list[childIndex]
  while (parentIndex>=0&&temp < list[parentIndex]) {
    list[childIndex] = list[parentIndex]
    childIndex = parentIndex
    parentIndex = getParentIndex(childIndex)
  }
  list[childIndex]= temp
}
let arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
// let arr1 = [7, 1, 3, 10, 5, 2, 8, 9, 6]
// buildHeap(arr)
upAjust(arr);
console.log(arr);

module.exports = {
  upAjust,downAjust,buildHeap,
}
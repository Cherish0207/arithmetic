function createBinaryTree (list) {
  let node = null
  if (list == null || list.length < 1) {
    return null
  }
  const data = list.shift()
  if (data) {
    node = {
      data,
      leftChild: createBinaryTree(list),
      rightChild: createBinaryTree(list)
    }
  }
  return node
}
function preOrderTraveral(node) {
  if (node == null) return
  console.log(node.data);
  preOrderTraveral(node.leftChild)
  preOrderTraveral(node.rightChild)
}
function inOrderTraveral(node) {
  if (node == null) return
  inOrderTraveral(node.leftChild)
  console.log(node.data);
  inOrderTraveral(node.rightChild)
}
function postOrderTraveral(node) {
  if (node == null) return
  postOrderTraveral(node.leftChild)
  postOrderTraveral(node.rightChild)
  console.log(node.data);
}
const node = createBinaryTree([3, 2, 9, null, null, 10, null, null, 8, null, 4])
console.log(node);
preOrderTraveral(node) // 3, 2, 9, 10, 8, 4
// inOrderTraveral(node) // 9, 2, 10, 3, 8, 4
// postOrderTraveral(node) // 9,10,2,4,8,3

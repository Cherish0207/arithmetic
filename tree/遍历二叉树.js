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
function preOrderTraveral (node) {
  let stack = []
  while (node || stack.length > 0) {
    while (node !== null) {
      console.log(node.data);
      stack.push(node)
      node = node.leftChild
    }
    if (stack.length > 0) {
      node = stack.pop()
      node = node.rightChild
    }
  }
}
const node = createBinaryTree([3, 2, 9, null, null, 10, null, null, 8, null, 4])
console.log(node);
preOrderTraveral(node) // 3, 2, 9, 10, 8, 4
// inOrderTraveral(node) // 9, 2, 10, 3, 8, 4
// postOrderTraveral(node) // 9,10,2,4,8,3

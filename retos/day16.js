function transformTree(tree) {
    const buildTree = (index) => {
      if (index >= tree.length || tree[index] === null) {
        return null;
      }
  
      const node = {
        value: tree[index],
        left: buildTree(2 * index + 1),
        right: buildTree(2 * index + 2)
      };
  
      return node;
    };
  
    return buildTree(0);
  }
  
const treeArray = [3, 1, 0, 8, 12, null, 1];
const treeObject = transformTree(treeArray);
console.log(treeObject);
  
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// function longestPassFromTreeNode(root: TreeNode | null): number {
//     if (root === null) return 0;
//     let leftPassLength = longestPassFromTreeNode(root.left);
//     let rightPassLength = longestPassFromTreeNode(root.right);
//     if (leftPassLength > rightPassLength) return 1 + leftPassLength;
//     return 1 + rightPassLength;
// }

// function diameterOfBinaryTree(root: TreeNode | null): number {
//     if (root === null) return 0;
//     let diameterOfLeft = diameterOfBinaryTree(root.left);
//     let diameterOfRight = diameterOfBinaryTree(root.right);
//     let diameterTraversedToRoot = longestPassFromTreeNode(root.left) + longestPassFromTreeNode(root.right);
//     return Math.max(diameterOfLeft, diameterOfRight, diameterTraversedToRoot);
// };

function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;
    function dfs(root:TreeNode | null): number {
        if (root === null) return 0;
        let leftDepth = dfs(root.left);
        let rightDepth = dfs(root.right);
        result = Math.max(result, leftDepth + rightDepth);
        let maxDepth = Math.max(leftDepth, rightDepth);
        return maxDepth + 1;
    }
    dfs(root);
    return result;
}

export {diameterOfBinaryTree, TreeNode};

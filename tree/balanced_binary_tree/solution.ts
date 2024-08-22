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

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;
    let result = true;
    function dfs(root: TreeNode | null): number {
        if (root === null) return 0;
        let leftDepth = dfs(root.left);
        let rightDepth = dfs(root.right);
        result = result && Math.abs(leftDepth - rightDepth) <= 1;
        return 1 + Math.max(leftDepth, rightDepth);
    }
    dfs(root);
    return result;
}

export { TreeNode, isBalanced };

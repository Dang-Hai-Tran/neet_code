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

function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    function dfs(root: TreeNode | null, level: number) {
        if (root === null) return;
        if (result[level] === undefined) result[level] = [];
        result[level].push(root.val);
        if (root.left) dfs(root.left, level + 1);
        if (root.right) dfs(root.right, level + 1);
    }
    dfs(root, 0);
    return result;
}

export { TreeNode, levelOrder };

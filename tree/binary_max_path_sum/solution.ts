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

function maxPathSum(root: TreeNode | null): number {
    let max = -Infinity;
    function dfs(root: TreeNode | null): number {
        if (root === null) return 0;
        let leftSumMax = dfs(root.left);
        let rightSumMax = dfs(root.right);
        max = Math.max(
            max,
            root.val,
            root.val + leftSumMax,
            root.val + rightSumMax,
            root.val + leftSumMax + rightSumMax
        );
        return root.val + Math.max(leftSumMax, rightSumMax, 0);
    }
    dfs(root);
    return max;
}

export { maxPathSum, TreeNode };

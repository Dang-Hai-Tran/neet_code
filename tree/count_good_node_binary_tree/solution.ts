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

function goodNodes(root: TreeNode | null): number {
    let count = 0;
    function dfs(root: TreeNode | null, maxValue: number) {
        if (root === null) return;
        if (root.val >= maxValue) {
            count++;
            maxValue = root.val;
        }
        dfs(root.left, maxValue);
        dfs(root.right, maxValue);
    }
    dfs(root, -Infinity);
    return count;
}

export { TreeNode, goodNodes };

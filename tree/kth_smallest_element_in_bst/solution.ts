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

function kthSmallest(root: TreeNode | null, k: number): number {
    let arr: number[] = [];
    function dfs(root: TreeNode | null) {
        if (root === null || arr.length === k) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return arr[k - 1];
}

export { TreeNode, kthSmallest };

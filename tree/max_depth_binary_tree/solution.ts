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

// function maxDepth(root: TreeNode | null): number {
//     if (root === null) return 0;
//     let depthLeft = maxDepth(root.left);
//     let depthRight = maxDepth(root.right);
//     return 1 + Math.max(depthLeft, depthRight);
// }

function maxDepth(root: TreeNode | null): string {
    function backtrack(root: TreeNode | null): [string, number] {
        if (root === null) return ["", 0];
        let [leftString, leftDepth] = backtrack(root.left);
        let [rightString, rightLeft] = backtrack(root.right);
        if (leftDepth > rightLeft) {
            return [`[${root.val}]` + leftString, 1 + leftDepth];
        } else {
            return [`[${root.val}]` + rightString, 1 + rightLeft];
        }
    }
    return backtrack(root)[0];
}

export { TreeNode, maxDepth };

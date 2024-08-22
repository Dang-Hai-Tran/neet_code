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

function isValidBST(root: TreeNode | null): boolean {
    if (root === null) return true;
    if (root.left && root.val <= root.left.val) return false;
    if (root.right && root.val >= root.right.val) return false;
    // Find max node in the left
    if (root.left) {
        let tmp = root.left;
        while (tmp.right !== null) tmp = tmp.right;
        if (tmp.val >= root.val) return false;
    }
    // Find min node in the right
    if (root.right) {
        let tmp = root.right;
        while (tmp.left !== null) tmp = tmp.left;
        if (tmp.val <= root.val) return false;
    }
    return isValidBST(root.left) && isValidBST(root.right);
}

export { TreeNode, isValidBST };

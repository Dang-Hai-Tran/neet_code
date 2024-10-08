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

function rightSideView(root: TreeNode | null): number[] {
    let arrValues: number[][] = [];
    function dfs(root: TreeNode | null, level: number) {
        if (root === null) return;
        if (arrValues[level] === undefined) arrValues[level] = [];
        arrValues[level].push(root.val);
        dfs(root.right, level + 1);
        dfs(root.left, level + 1);
    }
    dfs(root, 0);
    return arrValues.map((value) => value[0]);
}

export { TreeNode, rightSideView };

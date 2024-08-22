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

// function getPath(root: TreeNode | null, p: TreeNode): TreeNode[] {
//     const path: TreeNode[] = [];
//     if (!root) return path;

//     function dfs(node: TreeNode | null): boolean {
//         if (!node) return false;
//         path.push(node);
//         if (node === p) return true;
//         if (dfs(node.left) || dfs(node.right)) return true;
//         path.pop();
//         return false;
//     }

//     dfs(root);
//     return path;
// }

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     if (p === null && q === null) return null;
//     if (p === null && q !== null) {
//         if (getPath(root, q).length > 0) return q;
//         return null;
//     }
//     if (p !== null && q === null) {
//         if (getPath(root, p).length > 0) return p;
//         return null;
//     }
//     let pPath = getPath(root, p!);
//     let qPath = getPath(root, q!);
//     return qPath.filter((item) => pPath.includes(item)).at(-1) || null;
// }

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    if (p === null && q !== null) return p;
    if (p !== null && q === null) return q;
    let [min, max] = p!.val < q!.val ? [p!.val, q!.val] : [q!.val, p!.val];
    if (min <= root.val && root.val <= max) return root;
    if (min > root.val) return lowestCommonAncestor(root.right, p, q);
    return lowestCommonAncestor(root.left, p, q);
}

export { TreeNode, lowestCommonAncestor };

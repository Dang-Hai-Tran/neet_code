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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    let root = preorder[0];
    let indexRoot = inorder.indexOf(root);
    let buildTreeLeft = buildTree(preorder.slice(1, indexRoot + 1), inorder.slice(0, indexRoot));
    let buildTreeRight = buildTree(preorder.slice(indexRoot + 1), inorder.slice(indexRoot + 1));
    let rootNode = new TreeNode(root);
    rootNode.left = buildTreeLeft;
    rootNode.right = buildTreeRight;
    return rootNode;
}

// function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
//     function buildTreeClosure(
//         startPreorder: number,
//         endPreorder: number,
//         startInorder: number,
//         endInorder: number
//     ): TreeNode | null {
//         if (startPreorder > endPreorder || startInorder > endInorder) return null;
//         let rootValue = preorder[startPreorder];
//         let indexRoot = inorder.indexOf(rootValue);
//         let buildTreeLeft = buildTreeClosure(startPreorder + 1, indexRoot, startInorder, indexRoot - 1);
//         let buildTreeRight = buildTreeClosure(indexRoot + 1, endPreorder, indexRoot + 1, endInorder);
//         let root = new TreeNode(rootValue);
//         root.left = buildTreeLeft;
//         root.right = buildTreeRight;
//         return root;
//     }
//     return buildTreeClosure(0, preorder.length - 1, 0, inorder.length - 1);
// }

export { TreeNode, buildTree };

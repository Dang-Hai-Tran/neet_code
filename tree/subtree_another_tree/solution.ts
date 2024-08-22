interface ITreeNode {
    val: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}

class TreeNode implements ITreeNode {
    val: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
    constructor(val?: number, left?: ITreeNode | null, right?: ITreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isSameTree(p: ITreeNode | null, q: ITreeNode | null): boolean {
    if (p === null && q === null) return true;
    if ((p !== null ? p.val : null) !== (q !== null ? q.val : null)) return false;
    return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
}

function isSubtree(root: ITreeNode | null, subRoot: ITreeNode | null): boolean {
    if (root === null && subRoot === null) return true;
    if (root === null && subRoot !== null) return false;
    let isSameRoot = isSameTree(root, subRoot);
    let isSubtreeLeft = isSubtree(root!.left, subRoot);
    let isSubtreeRight = isSubtree(root!.right, subRoot);
    return isSameRoot || isSubtreeLeft || isSubtreeRight;
}

export { ITreeNode, TreeNode, isSubtree };

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

function serialize(root: TreeNode | null): string {
    let arr: string[] = [];
    function dfs(root: TreeNode | null) {
        if (root === null) {
            arr.push("*");
            return;
        }
        arr.push(String(root.val));
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return arr.join(" ");
}

function deserialize(data: string): TreeNode | null {
    let arr: string[] = data.split(" ");
    function dfs(arr: string[]): TreeNode | null {
        let value = arr.shift();
        if (!value || value === "*") {
            return null;
        }
        let root = new TreeNode(Number(value));
        root.left = dfs(arr);
        root.right = dfs(arr);
        return root;
    }
    let root = dfs(arr);
    return root;
}

export { TreeNode, deserialize, serialize };

import { kthSmallest, TreeNode } from "./solution";

describe("Test Kth smallest function", () => {
    it("example 1", () => {
        let root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);
        expect(kthSmallest(root, 1)).toEqual(1);
        expect(kthSmallest(root, 2)).toEqual(2)
    });
    it("example 2", () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.left.left.left = new TreeNode(1);
        expect(kthSmallest(root, 3)).toEqual(3);
    });
});

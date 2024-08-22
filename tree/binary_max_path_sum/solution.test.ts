import { TreeNode, maxPathSum } from "./solution";

describe("Test max path sum", () => {
    it("test case 3 nodes", () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        expect(maxPathSum(root)).toEqual(6);
    });
    it("test case 5 nodes: 1 left, 3 rights", () => {
        let root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        expect(maxPathSum(root)).toEqual(42);
    });
});

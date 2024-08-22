import { TreeNode, diameterOfBinaryTree } from "./solution";

describe("diameterOfBinaryTree", () => {
    it("should return the diameter of a binary tree", () => {
        // Create a binary tree
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        // Test the diameterOfBinaryTree function
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("should return 0 for a null tree", () => {
        expect(diameterOfBinaryTree(null)).toBe(0);
    });

    it("should return 0 for a tree with a single node", () => {
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });
});

import { TreeNode, levelOrder } from "./solution";

describe("levelOrder", () => {
    it("should return the level order traversal of a binary tree", () => {
        // Create a binary tree
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        // Call the levelOrder function
        const result = levelOrder(root);

        // Assert the expected output
        expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("should return an empty array if the root is null", () => {
        const result = levelOrder(null);
        expect(result).toEqual([]);
    });
});

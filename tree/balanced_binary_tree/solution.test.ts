import { TreeNode, isBalanced } from "./solution";

describe("isBalanced", () => {
    it("should return true for a balanced binary tree", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7))
        );
        expect(isBalanced(root)).toBe(true);
    });

    it("should return false for an unbalanced binary tree", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3, new TreeNode(4), null), new TreeNode(4)),
            new TreeNode(2)
        );
        expect(isBalanced(root)).toBe(false);
    });

    it("should return true for an empty tree", () => {
        expect(isBalanced(null)).toBe(true);
    });
});

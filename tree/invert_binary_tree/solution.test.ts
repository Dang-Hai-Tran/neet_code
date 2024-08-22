import { TreeNode, invertTree } from "./solution";

describe("invertTree", () => {
    it("should invert a binary tree", () => {
        // Construct a binary tree
        const root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(9);

        // Invert the binary tree
        const invertedRoot = invertTree(root);

        // Verify the inverted tree
        expect(invertedRoot!.val).toBe(4);
        expect(invertedRoot!.left!.val).toBe(7);
        expect(invertedRoot!.right!.val).toBe(2);
        expect(invertedRoot!.left!.left!.val).toBe(9);
        expect(invertedRoot!.left!.right!.val).toBe(6);
        expect(invertedRoot!.right!.left!.val).toBe(3);
        expect(invertedRoot!.right!.right!.val).toBe(1);
    });

    it("should return null for a null input", () => {
        const result = invertTree(null);
        expect(result).toBeNull();
    });
});

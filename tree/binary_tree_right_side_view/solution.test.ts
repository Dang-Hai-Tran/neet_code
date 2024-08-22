import { TreeNode, rightSideView } from "./solution";

describe("rightSideView", () => {
    it("should return an empty array for null input", () => {
        expect(rightSideView(null)).toEqual([]);
    });

    it("should return the correct view for a single node tree", () => {
        const root = new TreeNode(1);
        expect(rightSideView(root)).toEqual([1]);
    });

    it("should return the correct view for a balanced tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        expect(rightSideView(root)).toEqual([1, 3, 5]);
    });

    it("should return the correct view for an unbalanced tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.right = new TreeNode(3);
        root.left.right.right = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 2, 3, 4]);
    });

    it("should handle a tree with only left children", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 2, 3, 4]);
    });
    it("should handle a tree with single right node and 2 left nodes", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });
});

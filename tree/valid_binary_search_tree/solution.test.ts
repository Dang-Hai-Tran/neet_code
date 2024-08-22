import { TreeNode, isValidBST } from "./solution";

describe("isValidBST", () => {
    test("empty tree should be valid", () => {
        expect(isValidBST(null)).toBe(true);
    });

    test("single node tree should be valid", () => {
        const root = new TreeNode(1);
        expect(isValidBST(root)).toBe(true);
    });

    test("valid BST with three nodes", () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        expect(isValidBST(root)).toBe(true);
    });

    test("invalid BST with three nodes", () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(3);
        root.right = new TreeNode(1);
        expect(isValidBST(root)).toBe(false);
    });

    test("valid BST with multiple levels", () => {
        const root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(8);
        expect(isValidBST(root)).toBe(true);
    });

    test("invalid BST with multiple levels", () => {
        const root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(6); // This violates BST property
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(8);
        expect(isValidBST(root)).toBe(false);
    });
});

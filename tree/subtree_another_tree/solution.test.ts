import { TreeNode, isSubtree } from "./solution";

describe("isSubtree", () => {
    it("should return true if subRoot is a subtree of root", () => {
        const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
        const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return false if subRoot is not a subtree of root", () => {
        const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
        const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(3));
        expect(isSubtree(root, subRoot)).toBe(false);
    });

    it("should return true if root and subRoot are both null", () => {
        expect(isSubtree(null, null)).toBe(true);
    });

    it("should return false if root is null and subRoot is not null", () => {
        const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
        expect(isSubtree(null, subRoot)).toBe(false);
    });

    it("should return true if root is not null and subRoot is null", () => {
        const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
        expect(isSubtree(root, null)).toBe(true);
    });
});

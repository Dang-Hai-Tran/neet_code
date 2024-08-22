import { TreeNode, maxDepth } from "./solution";

describe("maxDepth", () => {
    it("should return 0 for null input", () => {
        expect(maxDepth(null)).toEqual("");
    });

    it("should return the correct depth for a simple tree", () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(maxDepth(root)).toEqual("[1][3]");
    });

    it("should return the correct depth for a more complex tree", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7, new TreeNode(8), null))
        );
        expect(maxDepth(root)).toEqual("[1][3][7][8]");
    });
});

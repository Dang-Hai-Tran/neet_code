import { goodNodes, TreeNode } from "./solution";

describe("Test good node function", () => {
    it("Test balance tree", () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.left = new TreeNode(3);
        root.right.left = new TreeNode(1);
        root.right.right = new TreeNode(5);
        expect(goodNodes(root)).toEqual(4);
    });
});

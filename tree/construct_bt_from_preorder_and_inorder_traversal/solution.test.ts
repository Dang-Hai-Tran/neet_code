import { buildTree, TreeNode } from "./solution";

describe("Test build tree function", () => {
    it("Test balance tree", () => {
        let preorder = [3, 9, 20, 15, 7];
        let inorder = [9, 3, 15, 20, 7];
        let tree: TreeNode | null = buildTree(preorder, inorder);
        expect(tree?.val).toEqual(3);
        expect(tree?.left?.val).toEqual(9);
        expect(tree?.right?.val).toEqual(20);
        expect(tree?.right?.left?.val).toEqual(15);
        expect(tree?.right?.right?.val).toEqual(7);
    });
});

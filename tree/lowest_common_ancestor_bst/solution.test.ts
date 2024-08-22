import { TreeNode, lowestCommonAncestor } from "./solution";

describe("lowestCommonAncestor", () => {
    it("should return the lowest common ancestor of two nodes", () => {
        const root = new TreeNode(
            6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        const p = root!.left!.right!.right;
        const q = root!.left!.right!.left;
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca).toEqual(root!.left!.right);
    });

    it("should return the node itself if it is the lowest common ancestor", () => {
        const root = new TreeNode(
            6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        const p = root.left;
        const q = root.left;
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca).toEqual(root.left);
    });

    it("should return null if one of the nodes is not found", () => {
        const root = new TreeNode(
            6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        const p = root.left!.right!.right;
        const q = new TreeNode(10);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca).toBeNull();
    });

    it("should return null if both nodes are not found", () => {
        const root = new TreeNode(
            6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        const p = new TreeNode(10);
        const q = new TreeNode(11);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca).toBeNull();
    });

    it("should return null if the root is null", () => {
        const lca = lowestCommonAncestor(null, new TreeNode(1), new TreeNode(2));
        expect(lca).toBeNull();
    });
});

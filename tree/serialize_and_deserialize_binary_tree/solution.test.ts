import { TreeNode, deserialize, serialize } from "./solution";

describe("Test serialize and deserialize", () => {
    it("test tree with 1 left and 3 right node", () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        expect(serialize(root)).toEqual("1 2 * * 3 4 * * 5 * *");
        let newRoot = deserialize("1 2 * * 3 4 * * 5 * *");
        expect(newRoot?.val).toEqual(1);
        expect(newRoot?.left?.val).toEqual(2);
        expect(newRoot?.right?.val).toEqual(3);
        expect(newRoot?.right?.left?.val).toEqual(4);
        expect(newRoot?.right?.right?.val).toEqual(5);
    });
});

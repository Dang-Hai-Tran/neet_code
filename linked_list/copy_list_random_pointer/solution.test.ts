import { copyRandomList, _Node } from './solution';

describe('copyRandomList', () => {
    it('should return null for an empty list', () => {
        expect(copyRandomList(null)).toBeNull();
    });

    it('should correctly copy a list with a single node', () => {
        const node = new _Node(1);
        node.random = node; // points to itself
        const copiedList = copyRandomList(node);
        expect(copiedList!.val).toBe(1);
        expect(copiedList!.random).toBe(copiedList); // points to itself
    });

    it('should correctly copy a list with multiple nodes', () => {
        const node1 = new _Node(1);
        const node2 = new _Node(2);
        node1.next = node2;
        node1.random = node2; // node1's random points to node2
        node2.random = node1; // node2's random points to node1

        const copiedList = copyRandomList(node1);
        expect(copiedList!.val).toBe(1);
        expect(copiedList!.next!.val).toBe(2);
        expect(copiedList!.random!.val).toBe(2);
        expect(copiedList!.next!.random!.val).toBe(1);
    });
});

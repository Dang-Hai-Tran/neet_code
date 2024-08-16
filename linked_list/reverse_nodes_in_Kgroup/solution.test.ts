import { ListNode, reverseKGroup } from "./solution";

describe("reverseKGroup", () => {
    it("should reverse nodes in groups of k", () => {
        // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
        const node8 = new ListNode(8);
        const node7 = new ListNode(7, node8);
        const node6 = new ListNode(6, node7);
        const node5 = new ListNode(5, node6);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);

        const k = 3;
        const newHead = reverseKGroup(node1, k);

        // Expected result: 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 7 -> 8
        let current = newHead;
        expect(current!.val).toBe(3);
        current = current!.next;
        expect(current!.val).toBe(2);
        current = current!.next;
        expect(current!.val).toBe(1);
        current = current!.next;
        expect(current!.val).toBe(6);
        current = current!.next;
        expect(current!.val).toBe(5);
        current = current!.next;
        expect(current!.val).toBe(4);
        current = current!.next;
        expect(current!.val).toBe(7);
        current = current!.next;
        expect(current!.val).toBe(8);
        expect(current!.next).toBeNull();
    });
});

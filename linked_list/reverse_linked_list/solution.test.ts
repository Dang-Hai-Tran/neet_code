import { ListNode, reverseList } from "./solution";

describe("Test reverse linked list", () => {
    test("test 1", () => {
        let node4 = new ListNode(5, null);
        let node3 = new ListNode(4, node4);
        let node2 = new ListNode(3, node3);
        let node1 = new ListNode(2, node2);
        let head = new ListNode(1, node1);
        let reverse = reverseList(head);
        let arrNode = [];
        while (reverse !== null) {
            arrNode.push(reverse.val);
            reverse = reverse.next;
        }
        expect(arrNode).toEqual([5, 4, 3, 2, 1]);
    });
    test("test 2", () => {
        let head = new ListNode(1, null);
        let reverse = reverseList(head);
        let arrNode = [];
        while (reverse !== null) {
            arrNode.push(reverse.val);
            reverse = reverse.next;
        }
        expect(arrNode).toEqual([1]);
    });
});

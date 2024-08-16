import { ListNode, removeNthFromEnd } from "./solution";

describe("test remove nth node from end of list", () => {
    test("test 1", () => {
        let node4 = new ListNode(5, null);
        let node3 = new ListNode(4, node4);
        let node2 = new ListNode(3, node3);
        let node1 = new ListNode(2, node2);
        let node0 = new ListNode(1, node1);
        let arr: number[] = [];
        let removedList = removeNthFromEnd(node0, 2);
        while (removedList) {
            arr.push(removedList.val);
            removedList = removedList.next;
        }
        expect(arr).toEqual([1, 2, 3, 5]);
    });
});

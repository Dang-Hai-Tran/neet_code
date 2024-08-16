import { ListNode, mergeTwoLists } from "./solution";

describe("Test merge two list", () => {
    test("test 1", () => {
        let list1 = new ListNode(1, null);
        let node2 = new ListNode(2, null);
        let node3 = new ListNode(4, null);
        list1.next = node2;
        node2.next = node3;
        let list2 = new ListNode(1, null);
        let node4 = new ListNode(3, null);
        let node5 = new ListNode(4, null);
        list2.next = node4;
        node4.next = node5;
        let mergedList = mergeTwoLists(list1, list2);
        let arrMerged = [];
        while (mergedList !== null) {
            arrMerged.push(mergedList.val);
            mergedList = mergedList.next;
        }
        expect(arrMerged).toEqual([1, 1, 2, 3, 4, 4]);
    });
});

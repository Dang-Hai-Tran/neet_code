import { ListNode, reorderList } from "./solution";

describe("Test reorder list", () => {
    test("test 1", () => {
        let node3 = new ListNode(4, null);
        let node2 = new ListNode(3, node3);
        let node1 = new ListNode(2, node2);
        let node0 = new ListNode(1, node1);
        reorderList(node0);
        let tmp: ListNode | null = node0;
        let arr: number[] = [];
        while (tmp) {
            arr.push(tmp.val);
            tmp = tmp.next;
        }
        expect(arr).toEqual([1, 4, 2, 3]);
    });
});

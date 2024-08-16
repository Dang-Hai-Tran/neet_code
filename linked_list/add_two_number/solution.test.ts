import { addTwoNumbers, ListNode } from "./solution";

describe("addTwoNumbers", () => {
    it("should add two numbers represented by linked lists", () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // represents 342
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // represents 465
        const result = addTwoNumbers(l1, l2); // should represent 807

        expect(result!.val).toBe(7); // 7 -> 0 -> 8
        expect(result!.next!.val).toBe(0);
        expect(result!.next!.next!.val).toBe(8);
    });
    it("should handle empty lists", () => {
        const l1 = null;
        const l2 = new ListNode(1); // represents 1
        const result = addTwoNumbers(l1, l2);

        expect(result!.val).toBe(1);
        expect(result!.next).toBeNull();
    });

    it("should handle cases where one list is longer", () => {
        const l1 = new ListNode(9, new ListNode(9)); // represents 99
        const l2 = new ListNode(1); // represents 1
        const result = addTwoNumbers(l1, l2); // should represent 100

        expect(result!.val).toBe(0); // 0 -> 0 -> 1
        expect(result!.next!.val).toBe(0);
        expect(result!.next!.next!.val).toBe(1);
    });
    it("should add two numbers represented by long linked lists", () => {
        const l1 = new ListNode(
            1,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))
        ); // represents 1000001
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // represents 465
        const result = addTwoNumbers(l1, l2); // should represent 1000466

        expect(result!.val).toBe(6); // 6->6->4->0->0->0-L1
        expect(result!.next!.val).toBe(6);
        expect(result!.next!.next!.val).toBe(4);
        expect(result!.next!.next!.next!.val).toBe(0);
        expect(result!.next!.next!.next!.next!.val).toBe(0);
        expect(result!.next!.next!.next!.next!.next!.val).toBe(0);
        expect(result!.next!.next!.next!.next!.next!.next!.val).toBe(1);
    });
});

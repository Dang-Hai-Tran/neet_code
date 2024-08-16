import { ListNode, mergeKLists } from "./solution";

describe("mergeKLists", () => {
    it("should merge k sorted linked lists", () => {
        // Create sample linked lists
        const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const list3 = new ListNode(2, new ListNode(6));
        const lists = [list1, list2, list3];

        // Call the mergeKLists function
        const result = mergeKLists(lists);

        // Verify the merged list
        let current = result;
        const expectedValues = [1, 1, 2, 3, 4, 4, 5, 6];
        for (const expectedValue of expectedValues) {
            expect(current?.val).toBe(expectedValue);
            current = current?.next || null;
        }
        expect(current).toBeNull();
    });

    it("should handle empty input lists", () => {
        const result = mergeKLists([]);
        expect(result).toBeNull();
    });

    it("should handle a single input list", () => {
        const list = new ListNode(1, new ListNode(2, new ListNode(3)));
        const result = mergeKLists([list]);
        let current = result;
        let i = 1;
        while (current) {
            expect(current.val).toBe(i);
            current = current.next;
            i++;
        }
        expect(current).toBeNull();
    });
});

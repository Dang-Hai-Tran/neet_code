class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    let current: ListNode | null = null;
    let next: ListNode | null;
    let count: number = 0;
    let head: ListNode | null = null;
    while (list1 !== null && list2 !== null) {
        if (list1!.val <= list2!.val) {
            next = list1;
            list1 = list1!.next;
        } else {
            next = list2;
            list2 = list2!.next;
        }
        if (current !== null) current.next = next;
        current = next;
        count++;
        if (count === 1) {
            head = current;
        }
    }
    if (list1 === null) current!.next = list2;
    if (list2 === null) current!.next = list1;
    return head;
}

export { mergeTwoLists, ListNode };

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    let tmp: ListNode | null = head;
    let prev = null;
    let cur: ListNode | null;
    while (tmp !== null) {
        cur = tmp;
        tmp = tmp.next;
        cur.next = prev;
        prev = cur;
    }
    return prev;
}

export {reverseList, ListNode};

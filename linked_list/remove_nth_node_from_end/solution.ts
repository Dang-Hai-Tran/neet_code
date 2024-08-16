class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null;
    if (n === 0) return head;
    let len = 0;
    let tmp: ListNode | null = head;
    while (tmp) {
        len += 1;
        tmp = tmp.next;
    }
    let removeIndex = len - n;
    if (removeIndex === 0) return head.next;
    len = 0;
    tmp = head;
    while (tmp && tmp.next) {
        if (len === removeIndex - 1) {
            tmp.next = tmp.next.next;
        }
        tmp = tmp.next;
        len += 1;
    }
    return head;
}

export { ListNode, removeNthFromEnd };

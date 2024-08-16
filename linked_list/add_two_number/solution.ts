class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let prev = dummy;
    let carry = 0;
    while (l1 != null || l2 != null) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        prev.next = new ListNode(digit);
        prev = prev.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) prev.next = new ListNode(carry);
    return dummy.next;
}

export { ListNode, addTwoNumbers };

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode(-1, head);
    let tmp = head;
    let turn = 0;
    let lenght = 0;
    let newHead: ListNode | null = null;
    while (tmp !== null) {
        lenght++;
        tmp = tmp.next;
    }
    tmp = head;
    while (tmp !== null && lenght >= k) {
        let count = 0;
        let copyDummy = dummy;
        let nextDummy = dummy.next;
        while (count < k && tmp !== null) {
            let next: ListNode | null = tmp.next;
            tmp.next = dummy;
            dummy = tmp;
            tmp = next;
            count++;
            lenght--;
        }
        if (turn === 0) {
            newHead = dummy;
        }
        copyDummy.next = dummy;
        dummy = nextDummy!;
        dummy.next = tmp;
        turn++;
    }
    return newHead;
}

export { ListNode, reverseKGroup };

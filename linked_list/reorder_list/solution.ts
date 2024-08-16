class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reorderList(head: ListNode | null): void {
    if (head === null) return;
    let arr : number[] = [];
    let tmp : ListNode | null = head;
    while (tmp != null) {
        arr.push(tmp.val);
        tmp = tmp.next;
    }
    tmp = head;
    let count = 0, left = 0, right = arr.length - 1;
    while (tmp != null) {
        if (count % 2 === 0) {
            tmp.val = arr[left];
            left += 1;
        } else {
            tmp.val = arr[right];
            right -= 1;
        }
        tmp = tmp.next;
        count += 1;
    }
}

export { ListNode, reorderList };

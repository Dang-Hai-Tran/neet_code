class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeKLists(lists:Array<ListNode | null>): ListNode | null {
    let dummy = new ListNode(-1);
    let copyDummy = dummy;
    while (true) {
        let minNode = new ListNode(Infinity);
        let indexMin = Infinity;
        for (let [index, list] of lists.entries()) {
            if (list && list.val < minNode.val) {
                minNode = list;
                indexMin = index;
            }
        }
        if (indexMin === Infinity) break;
        dummy.next = minNode;
        dummy = dummy.next;
        lists[indexMin] = lists[indexMin]?.next || null;
    }
    return copyDummy.next;
}

export {mergeKLists, ListNode};

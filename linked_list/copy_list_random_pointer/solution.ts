class _Node {
    val: number;
    next: _Node | null;
    random: _Node | null;

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

function copyRandomList(head: _Node | null): _Node | null {
    if (head === null) return null;
    let map = new Map<_Node | null, _Node | null>();
    let tmp: _Node | null = head;
    while (tmp !== null) {
        let copyTmp = new _Node(tmp.val);
        map.set(tmp, copyTmp);
        tmp = tmp.next;
    }
    map.set(null, null);
    tmp = head;
    while (tmp !== null) {
        let copyTmp = map.get(tmp)!;
        let nextTmp = tmp.next;
        let randomTmp = tmp.random;
        let copyNextTmp = map.get(nextTmp)!;
        let copyRandomTmp = map.get(randomTmp)!;
        copyTmp.next = copyNextTmp;
        copyTmp.random = copyRandomTmp;
        tmp = tmp.next;
    }
    return map.get(head)!;
}

export { _Node, copyRandomList };

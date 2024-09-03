class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private rightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIdx = this.parentIndex(index);
            if (this.heap[index] > this.heap[parentIdx]) {
                this.swap(index, parentIdx);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    private heapifyDown(): void {
        let index = 0;
        const length = this.heap.length;
        while (this.leftChildIndex(index) < length) {
            let largest = this.leftChildIndex(index);
            const rightIdx = this.rightChildIndex(index);

            if (rightIdx < length && this.heap[rightIdx] > this.heap[largest]) {
                largest = rightIdx;
            }

            if (this.heap[index] < this.heap[largest]) {
                this.swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }

    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    size(): number {
        return this.heap.length;
    }

    extractMax(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return max;
    }

    peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

function lastStoneWeight(stones: number[]): number {
    let maxheap = new MaxHeap();
    for (let stone of stones) {
        maxheap.insert(stone);
    }
    while (maxheap.size() > 1) {
        let maxOne = maxheap.extractMax();
        let maxTwo = maxheap.extractMax();
        let diffMax = Math.abs(maxOne! - maxTwo!);
        if (diffMax > 0) maxheap.insert(diffMax);
    }
    return maxheap.peek() || 0;
}

export { lastStoneWeight };

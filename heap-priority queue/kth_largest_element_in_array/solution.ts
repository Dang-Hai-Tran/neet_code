function findKthLargest(nums: number[], k: number): number {
    let minheap = new MinHeap();
    for (let num of nums) {
        let sizeHeap = minheap.getSize();
        if (sizeHeap >= k) {
            if (num <= minheap.getMin()) continue;
            minheap.extractMin();
        }
        minheap.insert(num);
    }
    return minheap.getMin();
}

class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    insert(num: number): void {
        this.heap.push(num);
        this.bubbleUp();
    }

    getSize() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[0];
    }

    extractMin(): number | null {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: number, rightChild: number;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild!)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    push(val: number): void {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return max;
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let maxIndex = index;

            if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[maxIndex]) {
                maxIndex = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[maxIndex]) {
                maxIndex = rightChild;
            }

            if (maxIndex === index) break;

            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            index = maxIndex;
        }
    }

    size(): number {
        return this.heap.length;
    }
}

function leastInterval(tasks: string[], n: number): number {
    const mapTasks = new Map<string, number>();
    for (let task of tasks) {
        mapTasks.set(task, (mapTasks.get(task) || 0) + 1);
    }
    const maxHeap = new MaxHeap();
    mapTasks.forEach((frequecies, tasks) => {
        maxHeap.push(frequecies);
    });
    let intervals = 0;
    while (maxHeap.size() > 0) {
        let taskCount = 0;
        const keepFreq: number[] = [];
        for (let i = 0; i < n + 1; i++) {
            let maxFreq = maxHeap.pop();
            if (maxFreq !== undefined) {
                taskCount++;
                if (maxFreq > 1) keepFreq.push(maxFreq - 1);
            }
        }
        keepFreq.forEach((freq) => maxHeap.push(freq));
        intervals += maxHeap.size() > 0 ? n + 1 : taskCount;
    }
    return intervals;
}

export { leastInterval };

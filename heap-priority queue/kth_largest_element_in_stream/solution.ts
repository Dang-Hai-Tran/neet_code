// class KthLargest {
//     k: number;
//     arr: number[];
//     constructor(k: number, nums: number[]) {
//         this.arr = [];
//         this.k = k;
//         for (let num of nums) {
//             this.add(num);
//         }
//     }

//     add(val: number): number {
//         this.arr.unshift(Infinity);
//         this.arr.push(-Infinity);
//         let left = 0;
//         let right = this.arr.length - 1;
//         // O(logn)
//         while (left < right - 1) {
//             let mid = Math.floor((left + right) / 2);
//             if (this.arr[left] >= val && val >= this.arr[mid]) right = mid
//             else left = mid;
//         }
//         // O(n)
//         this.arr.splice(right, 0, val);
//         this.arr.pop();
//         this.arr.shift();
//         return this.arr[this.k - 1];
//     }
// }

class KthLargest {
    minHeap: MinHeap;
    k: number;
    constructor(k: number, nums: number[]) {
        this.minHeap = new MinHeap();
        this.k = k;
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        if (this.minHeap.getSize() < this.k) {
            this.minHeap.insert(val);
        } else {
            if (val > this.minHeap.getMin()) {
                this.minHeap.extractMin();
                this.minHeap.insert(val);
            }
        }
        return this.minHeap.getMin();
    }
}

// Better way using Heap to insert an element with time complexity of O(logn)
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

export { KthLargest };

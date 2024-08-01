interface Pair {
    value: string;
    timestamp: number;
}

class TimeMap {
    private pairs: Map<string, Pair[]>;
    private timestamps: Map<string, number[]>;

    constructor() {
        this.pairs = new Map();
        this.timestamps = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.pairs.has(key)) {
            this.pairs.set(key, [{ value, timestamp }]);
        } else {
            this.pairs.get(key)!.push({ value, timestamp });
        }
        if (!this.timestamps.has(key)) {
            this.timestamps.set(key, [timestamp]);
        } else {
            this.timestamps.get(key)!.push(timestamp);
        }
    }

    get(key: string, timestamp: number): string {
        if (!this.pairs.has(key)) return "";
        const indexNearest = findMinNearest(this.timestamps.get(key)!, timestamp);
        if (indexNearest === -1) return "";
        const { value } = this.pairs.get(key)![indexNearest];
        return value;
    }
}

function findMinNearest(nums: number[], target: number) {
    let [left, right] = [0, nums.length - 1];
    if (nums[left] > target) return -1;
    if (nums[right] <= target) return right;
    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

export { TimeMap, findMinNearest };

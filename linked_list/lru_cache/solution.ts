class LRUCache {
    cache: Map<number, number>;
    usedKey: number[];
    capacity: number;
    constructor(capacity: number) {
        this.cache = new Map<number, number>();
        this.usedKey = [];
        this.capacity = capacity;
    }

    get(key: number): number {
        let value = this.cache.get(key);
        if (value !== undefined) {
            pushValueToArray(key, this.usedKey)
            return value;
        }
        return -1;
    }

    put(key: number, value: number): void {
        pushValueToArray(key, this.usedKey);
        this.cache.set(key, value);
        if (this.capacity < this.cache.size) {
            let leastUsedKey = this.usedKey.shift()!;
            this.cache.delete(leastUsedKey);
        }
    }
}


function pushValueToArray(value:number, nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === value) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums[nums.length - 1] = value;
            return;
        }
    }
    nums.push(value);
}

export { LRUCache };

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let arr = [...newMap.keys()];
    return arr.slice(0, k);
}

export { topKFrequent };

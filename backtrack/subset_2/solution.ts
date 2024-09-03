function subsetsWithDup(nums: number[]): number[][] {
    nums.sort();
    let subsets: number[][] = [];
    function backtrack(subset: number[], i: number) {
        if (i === nums.length) {
            subsets.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        backtrack(subset, i + 1);
        subset.pop();
        while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
        backtrack(subset, i + 1);
    }
    backtrack([], 0);
    return subsets;
}

export { subsetsWithDup };

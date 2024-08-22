function subsets(nums: number[]): number[][] {
    let res: number[][] = [];
    function backtrack(stack: number[], i: number) {
        if (i === nums.length) {
            res.push(stack);
            return;
        }
        backtrack([...stack, nums[i]], i + 1);
        backtrack([...stack], i + 1);
    }
    backtrack([], 0);
    return res;
}

export { subsets };

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    if (nums.length === 0) return [];
    while (k > 0) {
        let pt = 0,
            min = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                pt = i;
                min = nums[i];
            }
        }
        nums[pt] *= multiplier;
        k--;
    }
    return nums;
}

export { getFinalState };

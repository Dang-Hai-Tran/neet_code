function twoSum(nums: number[], target: number): number[] {
    const hash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in hash) return [hash[target - nums[i]], i];
        hash[nums[i]] = i;
    }
    return [];
}

export { twoSum };

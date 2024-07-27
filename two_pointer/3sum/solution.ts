function threeSum(nums: number[]): number[][] {
    const ret: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] < -nums[i]) {
                j++;
            } else if (nums[j] + nums[k] > -nums[i]) {
                k--;
            } else {
                ret.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }
        }
    }
    return ret;
}

export { threeSum };

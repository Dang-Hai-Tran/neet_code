function missingInteger(nums: number[]): number {
    let count = 1;
    let sum = nums[0];
    while (nums[count] === nums[0] + count) {
        sum += nums[count];
        count++;
    }
    let uniqueNums = new Set(nums);
    while (uniqueNums.has(sum)) sum++;
    return sum;
}

export { missingInteger };

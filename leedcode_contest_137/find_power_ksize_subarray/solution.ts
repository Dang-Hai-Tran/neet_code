function resultsArray(nums: number[], k: number): number[] {
    if (k === 1) return nums;
    let start = 0,
        end = 0,
        length = nums.length;
    let result: number[] = [];
    while (end < length) {
        if (end - start + 1 === k) {
            if (result.length > 0 && result!.at(-1) !== -1) {
                if (nums[end] === nums[end - 1] + 1) result.push(nums[end]);
                else result.push(-1);
            } else if (!isConsecutive(nums, start, end)) result.push(-1);
            else result.push(nums[end]);
            start++;
        }
        end++;
    }
    return result;
}

function isConsecutive(nums: number[], i: number, j: number): boolean {
    for (let start = i; start < j; start++) {
        if (nums[start] + 1 != nums[start + 1]) return false;
    }
    return true;
}

export { resultsArray };

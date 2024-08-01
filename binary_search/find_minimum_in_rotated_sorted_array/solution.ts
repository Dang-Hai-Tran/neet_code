function findMin(nums: number[]): number {
    let [left, right] = [0, nums.length - 1];
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return Math.min(nums[left], nums[right]);
}

export { findMin };

function maxSlidingWindow(nums: number[], k: number): number[] {
    let maxArr: number[] = [];
    let [left, right] = [0, 0];
    let deque: number[] = [];
    for (right; right < nums.length; right++) {
        while (deque.length && nums[deque.at(-1)!] <= nums[right]) {
            deque.pop();
        }
        deque.push(right);
        if (left > deque[0]) {
            deque.shift();
        }
        if (right - left + 1 >= k) {
            maxArr.push(nums[deque[0]]);
            left += 1;
        }
    }
    return maxArr;
}

export { maxSlidingWindow };

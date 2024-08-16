function maxSlidingWindow(nums: number[], k: number): number[] {
    if (k === 1) return nums;
    let out: number[] = [];
    let [l, r] = [0, 0];
    let deque: number[] = [];
    while (r < nums.length) {
        while (nums[deque.at(-1)!] < nums[r]) {
            deque.pop();
        }
        deque.push(r);

        if (l > deque[0]) {
            deque.shift();
        }

        if (r >= k - 1) {
            out.push(nums[deque[0]]);
            l++;
        }
        r++;
    }
    return out;
}

export { maxSlidingWindow };

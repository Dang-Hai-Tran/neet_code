function lengthOfLongestSubstring(s: string): number {
    let map = new Map<string, number>();
    let maxLen = 0;
    let left = -1;
    for (let right = 0; right < s.length; right++) {
        let prev = map.get(s[right]);
        if (prev !== undefined && prev > left) left = prev;
        maxLen = Math.max(maxLen, right - left);
        map.set(s[right], right);
    }
    return maxLen;
}

export { lengthOfLongestSubstring };

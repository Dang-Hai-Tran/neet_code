function characterReplacement(s: string, k: number): number {
    let longest = 0;
    let left = 0;
    let map = new Map<string, number>();
    let maxRepeat = 0;
    for (let right = 0; right < s.length; right++) {
        let charRight = s[right];
        map.set(charRight, (map.get(charRight) ?? 0) + 1);
        maxRepeat = Math.max(maxRepeat, map.get(charRight)!);
        while (right - left + 1 - maxRepeat > k) {
            let charLeft = s[left];
            map.set(charLeft, map.get(charLeft)! - 1);
            let values = Array.from(map.values());
            maxRepeat = Math.max(...values);
            left++;
        }
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}

export { characterReplacement };

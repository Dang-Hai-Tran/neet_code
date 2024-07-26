function longestConsecutive(nums: number[]): number {
    const numsUnique = new Set(nums);
    let maxLen = 0;
    for (let num of numsUnique) {
        let currentLen = 1;
        if (!numsUnique.has(num - 1)) {
            while (numsUnique.has(num + 1)) {
                currentLen++;
                num++;
            }
        }
        maxLen = maxLen < currentLen ? currentLen : maxLen
    }
    return maxLen;
}

export { longestConsecutive };

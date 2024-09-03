function partition(s: string): string[][] {
    if (s === "") return [[]];
    if (s.length === 1) return [[s]];
    let partitions: string[][] = [];
    for (let right = 0; right < s.length; right++) {
        let strLeftToRight = s.slice(0, right + 1);
        if (!isPalindrome(strLeftToRight)) continue;
        let partitionRight = partition(s.slice(right + 1));
        let mergedToPartitionRight = partitionRight.map((value: string[], index) => {
            value.unshift(strLeftToRight);
            return value;
        });
        partitions.push(...mergedToPartitionRight);
    }
    return partitions;
}

function isPalindrome(s: string): boolean {
    let sReverse = s.split("").reverse().join("");
    return sReverse === s;
}

export { partition };

function containsDuplicate(nums: number[]): boolean {
    const uniqueNums = new Set(nums); // O(n)
    return uniqueNums.size !== nums.length;
}

export { containsDuplicate };

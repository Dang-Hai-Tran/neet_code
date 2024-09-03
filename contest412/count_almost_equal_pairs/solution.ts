function countPairs(nums: number[]): number {
    let count = 0;

    // Helper function to generate all possible numbers by swapping two digits
    function generateSwaps(num: number): Set<string> {
        const numStr = num.toString();
        const swaps = new Set<string>();

        for (let i = 0; i < numStr.length; i++) {
            for (let j = i + 1; j < numStr.length; j++) {
                const numArr = numStr.split('');
                [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
                swaps.add(numArr.join(''));
            }
        }

        return swaps;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const swapsI = generateSwaps(nums[i]);
            const swapsJ = generateSwaps(nums[j]);

            // Check if any swap of nums[i] matches nums[j] or vice versa
            if (swapsI.has(nums[j].toString()) || swapsJ.has(nums[i].toString())) {
                count++;
            }
        }
    }

    return count;
}

export { countPairs };

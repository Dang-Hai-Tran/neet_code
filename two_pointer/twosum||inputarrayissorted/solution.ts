function twoSum(numbers: number[], target: number): number[] {
    let [p1, p2] = [0, numbers.length - 1];
    while (p1 < p2) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--;
        } else if (numbers[p1] + numbers[p2] < target) {
            p1++;
        } else {
            return [p1 + 1, p2 + 1];
        }
    }
    return [];
}

export { twoSum };

function permute(nums: number[]): number[][] {
    let permutations: number[][] = [];
    let length = nums.length;
    function backtrack(stack: number[]) {
        if (stack.length === length) {
            permutations.push([...stack]);
            return;
        }
        for (let num of nums) {
            if (stack.includes(num)) continue;
            stack.push(num);
            backtrack(stack);
            stack.pop();
        }
    }
    backtrack([]);
    return permutations;
}

export { permute };

function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    const result: number[] = new Array(len).fill(1);

    let prefix = 1;
    for (let i = 0; i < len; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = len - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    return result;
}

export { productExceptSelf };

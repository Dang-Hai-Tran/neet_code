function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) return false;
    if (matrix.length === 1) {
        return search(matrix[0], target);
    }
    let startNumber = matrix.map((val, idx) => [val[0], idx]);
    let left = 0;
    let right = startNumber.length - 1;
    while (left !== right - 1) {
        let mid = Math.floor((left + right) / 2);
        if (startNumber[mid][0] <= target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    let arrToSearch1 = matrix[startNumber[left][1]];
    let ret1 = search(arrToSearch1, target);
    let arrToSearch2 = matrix[startNumber[right][1]];
    let ret2 = search(arrToSearch2, target);
    return ret1 || ret2;
}

function search(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

export { searchMatrix };

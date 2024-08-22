// function search(nums: number[], target: number): number {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         }
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1; // Target not found
// }

function search(nums: number[], target: number): number {
    function dfs(left: number, right: number) {
        if (left > right) return -1;
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return dfs(mid + 1, right);
        return dfs(left, mid - 1);
    }
    return dfs(0, nums.length - 1);
}

export { search };

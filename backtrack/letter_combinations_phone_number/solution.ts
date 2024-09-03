// 1. Recursive
// function letterCombinations(digits: string): string[] {
//     let map: { [key: string]: string } = {
//         "1": "",
//         "2": "abc",
//         "3": "def",
//         "4": "ghi",
//         "5": "jkl",
//         "6": "mno",
//         "7": "pqrs",
//         "8": "tuv",
//         "9": "wxyz",
//     };
//     if (digits.length === 0) return [];
//     if (digits.length === 1) return map[digits].split("");
//     let start = digits[0];
//     let rest = digits.substring(1);
//     let combinations: string[] = [];
//     for (let char of map[start]) {
//         let charCombineRest = letterCombinations(rest).map((value, index) => char + value);
//         combinations.push(...charCombineRest);
//     }
//     return combinations;
// }

// 2. Backtracking
function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    let res: string[] = [];
    let map: { [key: string]: string } = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };
    function backtrack(str: string, digits: string) {
        if (digits === "") {
            res.push(str);
            return;
        }
        for (let char of map[digits[0]]) {
            backtrack(str + char, digits.substring(1));
        }
    }
    backtrack("", digits);
    return res;
}

export { letterCombinations };

// function isValidSudoku(board: string[][]): boolean {
//     let arrCheck: Array<string> = Array(9);
//     // Check x
//     for (let y = 0; y < 9; y++) {
//         for (let x = 0; x < 9; x++) {
//             arrCheck[x] = board[y][x];
//         }
//         if (!checkArr(arrCheck)) return false;
//     }
//     // Check y
//     for (let x = 0; x < 9; x++) {
//         for (let y = 0; y < 9; y++) {
//             arrCheck[y] = board[y][x];
//         }
//         if (!checkArr(arrCheck)) return false;
//     }
//     // Check 3 * 3
//     for (let x = 0; x < 3; x++) {
//         for (let y = 0; y < 3; y++) {
//             for (let i = 0; i < 3; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     arrCheck[3 * i + j] = board[3 * y + j][3 * x + i];
//                 }
//             }
//             if (!checkArr(arrCheck)) return false;
//         }
//     }
//     return true;
// }

// function checkArr(arr: Array<string>): boolean {
//     const chiffArr = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
//     const map = new Map<string, number>();
//     for (let char of arr) {
//         if (char === ".") continue;
//         if (!chiffArr.has(char)) {
//             return false;
//         }
//         if (!map.has(char)) {
//             map.set(char, 1);
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === ".") continue; // Skip empty cells

            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check for duplicates in row, column, and box
            if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            // Add the number to the respective sets
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
}

export { isValidSudoku };

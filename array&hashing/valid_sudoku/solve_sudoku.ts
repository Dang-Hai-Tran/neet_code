function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === ".") continue;
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
}

function solveSudoku(sudoku: string[]): string[][][] {
    let ret: string[][][] = [];
    let sudokuFormat = sudoku.map((row) => row.split(""));
    backtrack(sudokuFormat, ret);
    return ret;
}
function countNotSolve(sudoku: string[][]) {
    let notSolve = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[j][i] === ".") notSolve++;
        }
    }
    return notSolve;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => String(value));

function backtrack(sudoku: string[][], ret: string[][][]) {
    if (countNotSolve(sudoku) === 0) {
        ret.push(sudoku);
        return;
    }
    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 9; r++) {
            if (sudoku[r][c] === ".") {
                for (let val of numbers) {
                    sudoku[r][c] = val;
                    if (isValidSudoku(sudoku)) {
                        const newSudoku = sudoku.map((val) => [...val]);
                        backtrack(newSudoku, ret);
                    }
                }
            }
        }
    }
}

export { solveSudoku };

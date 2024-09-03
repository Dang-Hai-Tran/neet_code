function solveNQueens(n: number): string[][] {
    let board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));
    let res: string[][] = [];
    function checkQueen(board: string[][], row: number, col: number) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === "Q") {
                    if (i === row) return false;
                    if (j === col) return false;
                    if (Math.abs(i - row) === Math.abs(j - col)) return false;
                }
            }
        }
        return true;
    }

    function backtrack(row: number) {
        if (row === n) {
            res.push(board.map((value) => value.join("")));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (checkQueen(board, row, col)) {
                board[row][col] = "Q";
                backtrack(row + 1);
            }
            board[row][col] = ".";
        }
    }
    backtrack(0);
    return res;
}

export { solveNQueens };

function maxValueSum(board: number[][]): number {
    let max = -Infinity;
    let rowL = board.length;
    let colL = board[0].length;
    for (let i = 0; i < rowL; i++) {
        for (let j = 0; j < colL; j++) {
            let first = board[i][j];
            for (let l = 0; l < rowL; l++) {
                if (l === i) continue;
                for (let m = 0; m < colL; m++) {
                    if (m === j) continue;
                    let second = board[l][m];
                    for (let x = 0; x < rowL; x++) {
                        if (x === i || x === l) continue;
                        for (let y = 0; y < colL; y++) {
                            if (y === j || y === m) continue;
                            let thirst = board[x][y];
                            let sum = first + second + thirst;
                            max = Math.max(sum, max);
                        }
                    }
                }
            }
        }
    }
    return max;
}

export { maxValueSum };

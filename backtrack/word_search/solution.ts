function exist(board: string[][], word: string): boolean {
    let ROWS = board.length,
        COLS = board[0].length;
    if (word.length > ROWS * COLS) return false;
    const charCount: { [key: string]: number } = {};
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            charCount[board[i][j]] = (charCount[board[i][j]] || 0) + 1;
        }
    }
    for (const char of word) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    let visited: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let DIRECTIONS = [-1, 0, 1, 0, -1];
    function backtrack(row: number, col: number, str: string) {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || visited[row][col]) return false;
        let char = board[row][col];
        let newStr = str + char;
        if (newStr.length > word.length || newStr[newStr.length - 1] !== word[newStr.length - 1]) return false;
        if (newStr === word) return true;
        visited[row][col] = true;
        for (let i = 0; i < 4; i++) {
            if (backtrack(row + DIRECTIONS[i], col + DIRECTIONS[i + 1], newStr)) return true;
        }
        visited[row][col] = false;
        return false;
    }
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (backtrack(row, col, "")) return true;
        }
    }
    return false;
}

export { exist };

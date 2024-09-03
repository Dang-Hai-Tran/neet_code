function numIslands(grid: string[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const directions = [-1, 0, 1, 0, -1];
    let nbIslands = 0;
    function dfs(row: number, col: number) {
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || grid[row][col] === "0") return;
        grid[row][col] = "0";
        for (let i = 0; i < 4; i++) {
            dfs(row + directions[i], col + directions[i + 1]);
        }
    }
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === "1") nbIslands++;
            dfs(row, col);
        }
    }
    return nbIslands;
}

export { numIslands };

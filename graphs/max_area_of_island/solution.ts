function maxAreaOfIsland(grid: number[][]): number {
    let Rows = grid.length;
    let Cols = grid[0].length;
    let Directions = [-1, 0, 1, 0, -1];
    function dfs(row: number, col: number, area = { val: 0 }) {
        if (row < 0 || col < 0 || row >= Rows || col >= Cols || grid[row][col] === 0) return area.val;
        if (grid[row][col] === 1) {
            area.val += 1;
            grid[row][col] = 0;
        }
        for (let i = 0; i < 4; i++) {
            dfs(row + Directions[i], col + Directions[i + 1], area);
        }
        return area.val;
    }
    let maxArea = 0;
    for (let row = 0; row < Rows; row++) {
        for (let col = 0; col < Cols; col++) {
            maxArea = Math.max(maxArea, dfs(row, col));
        }
    }
    return maxArea;
}

export { maxAreaOfIsland };

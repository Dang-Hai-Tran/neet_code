function maxArea(height: number[]): number {
    let maxArea = 0;
    let [p1, p2] = [0, height.length - 1];
    while (p1 < p2) {
        let area = Math.min(height[p1], height[p2]) * (p2 - p1);
        maxArea = Math.max(maxArea, area);
        if (height[p1] > height[p2]) {
            p2--;
        } else {
            p1++;
        }
    }
    return maxArea;
}

export { maxArea };

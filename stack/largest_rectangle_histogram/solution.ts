// Naive
function largestRectangleArea(heights: number[]): number {
    let maxRec = 0;
    const stack: [number, number][] = [];
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length && heights[i] < stack.at(-1)![0]) {
            const [height, index] = stack.pop()!;
            maxRec = Math.max(maxRec, height * (i - index));
            start = index;
        }
        stack.push([heights[i], start]);
    }
    for (let i = 0; i < stack.length; i++) {
        maxRec = Math.max(maxRec, (heights.length - stack[i][1]) * stack[i][0]);
    }

    return maxRec;
}

export { largestRectangleArea };

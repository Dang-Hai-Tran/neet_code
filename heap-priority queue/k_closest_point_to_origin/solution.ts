function kClosest(points: number[][], k: number): number[][] {
    points.sort((a: number[], b: number[]) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]));
    return points.slice(0, k);
}

export { kClosest };

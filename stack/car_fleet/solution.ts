function carFleet(target: number, position: number[], speed: number[]): number {
    const ps: [number, number][] = position.map((pos, idx) => [pos, speed[idx]]);
    ps.sort((a, b) => a[0] - b[0]);

    let countFleet = 0;
    let maxTime = 0;

    for (let i = ps.length - 1; i >= 0; i--) {
        const time = (target - ps[i][0]) / ps[i][1];
        if (time > maxTime) {
            countFleet++;
            maxTime = time;
        }
    }

    return countFleet;
}

export { carFleet };

function minEatingSpeed(piles: number[], h: number): number {
    let sumBananas = piles.reduce((sum, a) => sum + a, 0);
    let left = Math.floor(sumBananas / h);
    let right = Math.max(...piles);
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function canEatAll(piles: number[], eatPerHour: number, hour: number): boolean {
    let hourCheck: number = 0;
    for (let val of piles) {
        hourCheck += Math.ceil(val / eatPerHour);
    }
    if (hourCheck <= hour) return true;
    return false;
}

export { minEatingSpeed };

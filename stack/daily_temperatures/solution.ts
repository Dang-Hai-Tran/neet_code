// Naive O(nlogn)
// function dailyTemperatures(temperatures: number[]): number[] {
//     let ret: number[] = [];
//     for (let i = 0; i < temperatures.length - 1; i++) {
//         let pushed = false;
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 ret.push(j - i);
//                 pushed = true;
//                 break;
//             }
//         }
//         if (!pushed) {
//             ret.push(0);
//         }
//     }
//     ret.push(0);
//     return ret;
// }

// Better O(n)
function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;
    const ret: number[] = new Array(length).fill(0);
    const tempStack: [number, number][] = [];

    for (let i = 0; i < length; i++) {
        while (tempStack && temperatures[i] > tempStack.at(-1)![0]) {
            const [temp, j] = tempStack.pop()!;
            ret[j] = i - j;
        }
        tempStack.push([temperatures[i], i]);
    }

    return ret;
}

export { dailyTemperatures };

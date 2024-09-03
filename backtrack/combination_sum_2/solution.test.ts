import { combinationSum2 } from "./solution";

describe("test combination sum 2 function", () => {
    it("test exp 1", () => {
        let candidates = [10, 1, 2, 7, 6, 1, 5];
        let target = 8;
        console.log(combinationSum2(candidates, target));
    });
    it("test exp 2", () => {
        let candidates = [2,5,2,1,2];
        let target = 5;
        console.log(combinationSum2(candidates, target));
    });
});

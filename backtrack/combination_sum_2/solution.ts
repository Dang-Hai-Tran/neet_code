function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort();
    let res: number[][] = [];
    function backtrack(chosenCandidates: number[], sum: number, start: number) {
        if (sum >= target) {
            if (sum === target) res.push([...chosenCandidates]);
            return;
        }
        let prev = -1;
        for (let [index, candidate] of candidates.entries()) {
            if (index < start || candidate === prev) continue;
            chosenCandidates.push(candidate);
            start = index;
            backtrack(chosenCandidates, sum + candidate, start + 1);
            chosenCandidates.pop();
            prev = candidate;
        }
    }
    backtrack([], 0, -1);
    return res;
}

export { combinationSum2 };

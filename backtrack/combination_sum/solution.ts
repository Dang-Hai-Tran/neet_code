function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = [];
    function backtrack(chosenCandidates: number[], sum: number) {
        if (sum >= target) {
            if (sum === target) res.push([...chosenCandidates]);
            return;
        }
        for (let candidate of candidates) {
            if (chosenCandidates.length > 0 && candidate < chosenCandidates.at(-1)!) continue;
            chosenCandidates.push(candidate);
            backtrack(chosenCandidates, sum + candidate);
            chosenCandidates.pop();
        }
    }
    backtrack([], 0);
    return res;
}

export { combinationSum };

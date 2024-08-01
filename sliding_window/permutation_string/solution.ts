function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length === 0) return true;
    if (s1.length > s2.length) return false;
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    function match(): boolean {
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] != s2Count[i]) return false;
        }
        return true;
    }
    let charCodeA = "a".charCodeAt(0);
    for (let i = 0; i < s1.length; i++) {
        let countIndex = s1.charCodeAt(i) - charCodeA;
        s1Count[countIndex]++;
    }
    let left = 0;
    for (let right = s1.length - 1; right < s2.length; right++) {
        if (right === s1.length - 1) {
            for (let i = 0; i < s1.length; i++) {
                let countIndex = s2.charCodeAt(i) - charCodeA;
                s2Count[countIndex]++;
            }
        } else {
            let countIndex = s2.charCodeAt(right) - charCodeA;
            s2Count[countIndex]++;
            countIndex = s2.charCodeAt(left - 1) - charCodeA;
            s2Count[countIndex]--;
        }
        if (match()) return true;
        left++;
    }
    return false;
}

export { checkInclusion };

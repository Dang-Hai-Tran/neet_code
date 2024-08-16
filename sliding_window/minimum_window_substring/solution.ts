function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";
    let sCount = new Array(52).fill(0);
    let tCount = new Array(52).fill(0);
    let left = 0;
    let minSub = "";
    for (let i = 0; i < t.length; i++) {
        let index = findCharCode(t[i]);
        tCount[index]++;
    }
    function isSubString() {
        for (let i = 0; i < 52; i++) {
            if (sCount[i] < tCount[i]) return false;
        }
        return true;
    }
    for (let right = t.length - 1; right < s.length; right++) {
        if (right === t.length - 1) {
            for (let i = 0; i < t.length; i++) {
                let index = findCharCode(s[i]);
                sCount[index]++;
            }
        } else {
            let index = findCharCode(s[right]);
            sCount[index]++;
        }
        while (isSubString()) {
            let sub = s.slice(left, right + 1);
            if (sub.length < minSub.length || minSub === "") {
                minSub = sub;
            }
            let index = findCharCode(s[left]);
            sCount[index]--;
            left++;
        }
    }

    return minSub;
}

function findCharCode(char: string): number {
    const charCode = char.charCodeAt(0);
    if (char >= "A" && char <= "Z") {
        return charCode - "A".charCodeAt(0);
    } else if (char >= "a" && char <= "z") {
        return charCode - "a".charCodeAt(0) + 26;
    }
    throw new Error("Invalid character: " + char);
}

export { minWindow };

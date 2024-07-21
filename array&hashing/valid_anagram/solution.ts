function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false; // O(n)
    const hashS = strToHash(s); // O(n)
    const hashT = strToHash(t); // O(n)
    for (const char in hashS) {
        if (!(char in hashT) || hashS[char] != hashT[char]) return false; // O(n)
    }
    return true;
}

function strToHash(s: string): Record<string, number> {
    const hash: Record<string, number> = {};
    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1;
    }
    return hash;
}

export { isAnagram };

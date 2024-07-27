function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let [p1, p2] = [0, s.length - 1];
    while (p1 < p2) {
        if (s[p1] != s[p2]) return false;
        p1++;
        p2--;
    }
    return true;
}

export { isPalindrome };

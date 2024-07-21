function groupAnagrams(strs: string[]): string[][] {
    const hashStr: Map<string, string[]> = new Map();
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (!hashStr.has(sortedStr)) {
            hashStr.set(sortedStr, []);
        }
        hashStr.get(sortedStr)!.push(str);
    }

    return Array.from(hashStr.values());
}

export { groupAnagrams };

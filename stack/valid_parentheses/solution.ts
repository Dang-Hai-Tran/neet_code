function isValid(s: string): boolean {
    let mapBracket: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
    let stack = [];
    for (let p of s) {
        if (Object.keys(mapBracket).includes(p)) {
            stack.push(p);
        } else if (Object.values(mapBracket).includes(p)) {
            let q = stack.pop();
            if (!q || mapBracket[q] != p) return false;
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

export { isValid };

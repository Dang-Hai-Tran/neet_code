class TrieNode {
    value: string | null;
    next: Map<string, TrieNode> | null;
    isEnd: boolean;
    constructor(value?: string | null, next?: Map<string, TrieNode> | null) {
        this.value = value || null;
        this.next = next || null;
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        if (word.length === 0) return;
        let tmp = this.root;
        for (let i = 0; i < word.length; i++) {
            if (tmp.next === null) tmp.next = new Map<string, TrieNode>();
            if (!tmp.next.has(word[i])) tmp.next.set(word[i], new TrieNode(word[i]));
            tmp = tmp.next.get(word[i])!;
            if (i === word.length - 1) tmp.isEnd = true;
        }
    }

    search(word: string): boolean {
        function dfs(root: TrieNode, i: number) {
            for (let j = i; j < word.length; j++) {
                if (root.next === null) return false;
                if (word[j] !== ".") {
                    if (!root.next.has(word[j])) return false;
                    root = root.next.get(word[j])!;
                    if (j === word.length - 1 && root.isEnd !== true) return false;
                } else {
                    for (let key of root.next.keys()) {
                        let child = root.next!.get(key)!;
                        if (j === word.length - 1 && child.isEnd !== true) continue;
                        if (dfs(child, j + 1) === true) return true;
                    }
                    return false;
                }
            }
            return true;
        }
        return dfs(this.root, 0);
    }
}

export { WordDictionary };

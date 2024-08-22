// class Trie {
//     words: Map<string, string[]>;
//     constructor() {
//         this.words = new Map<string, string[]>();
//     }

//     insert(word: string): void {
//         if (this.words.has(word[0])) {
//             this.words.get(word[0])?.push(word);
//         } else {
//             this.words.set(word[0], [word]);
//         }
//     }

//     search(word: string): boolean {
//         let arrWords = this.words.get(word[0]);
//         if (arrWords !== undefined && arrWords.includes(word)) return true;
//         return false;
//     }

//     startsWith(prefix: string): boolean {
//         let arrWords = this.words.get(prefix[0]);
//         if (arrWords === undefined) return false;
//         for (let word of arrWords) {
//             if (word.startsWith(prefix)) return true;
//         }
//         return false;
//     }
// }

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

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string) {
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
        if (word.length === 0) return true;
        let tmp = this.root;
        for (let i = 0; i < word.length; i++) {
            if (tmp.next === null) return false;
            if (!tmp.next.has(word[i])) return false;
            tmp = tmp.next.get(word[i])!;
            if (i === word.length - 1 && tmp.isEnd !== true) return false;
        }
        return true;
    }
    startsWith(prefix: string): boolean {
        if (prefix.length === 0) return true;
        let tmp = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (tmp.next === null) return false;
            if (!tmp.next.has(prefix[i])) return false;
            tmp = tmp.next.get(prefix[i])!;
        }
        return true;
    }
}

export { Trie };

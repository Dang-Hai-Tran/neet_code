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
}

function findWords(board: string[][], words: string[]): string[] {
    let trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    const ROWS = board.length;
    const COLS = board[0].length;
    let visited: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let res: string[] = [];

    function dfs(root: TrieNode, row: number, col: number, str: string): void {
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || visited[row][col]) return;
        if (!root.next) return;
        let char = board[row][col];
        let next = root.next.get(char);
        if (!next) return;
        str += char;
        if (next.isEnd === true) {
            res.push(str);
            next.isEnd = false;
        }
        visited[row][col] = true;
        dfs(next, row - 1, col, str);
        dfs(next, row + 1, col, str);
        dfs(next, row, col + 1, str);
        dfs(next, row, col - 1, str);
        visited[row][col] = false;
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            dfs(trie.root, r, c, "");
        }
    }

    return res;
}

// function findWords(board: string[][], words: string[]): string[] {
//     const trie = new Trie();
//     let rowL = board.length;
//     let colL = board[0].length;
//     let visited: boolean[][] = Array.from({ length: rowL }, () => Array(colL).fill(false));
//     function addNodeToTrie(root: TrieNode, x: number, y: number, visited: boolean[][]) {
//         if (x < 0 || x >= colL || y < 0 || y >= rowL || visited[y][x] === true) return;

//         const char = board[y][x];
//         if (!root.next) root.next = new Map<string, TrieNode>();
//         if (!root.next.has(char)) root.next.set(char, new TrieNode(char));
//         let originRoot = root;
//         root = root.next.get(char)!;
//         visited[y][x] = true;

//         const directions = [
//             [-1, 0],
//             [1, 0],
//             [0, -1],
//             [0, 1],
//         ];
//         for (const [dx, dy] of directions) {
//             addNodeToTrie(root, x + dx, y + dy, visited);
//         }
//         root = originRoot;
//         visited[y][x] = false;
//     }
//     for (let row = 0; row < rowL; row++) {
//         for (let col = 0; col < colL; col++) {
//             addNodeToTrie(trie.root, col, row, visited);
//         }
//     }
//     let result: string[] = [];
//     for (let word of words) {
//         if (trie.search(word)) result.push(word);
//     }
//     return result;
// }
// function findWordsImprove(board: string[][], words: string[]): string[] {
//     let rowL = board.length;
//     let colL = board[0].length;
//     let visited: boolean[][] = Array.from({ length: rowL }, () => Array(colL).fill(false));
//     function backtrack(x: number, y: number, word: string, i: number, visited: boolean[][]): boolean {
//         if (x < 0 || x >= colL || y < 0 || y >= rowL || visited[y][x]) return false;
//         if (i === word.length - 1 && board[y][x] === word[i]) return true;
//         if (i === word.length - 1) return false;
//         let char = board[y][x];
//         if (char !== word[i]) return false;
//         visited[y][x] = true;
//         let result =
//             backtrack(x - 1, y, word, i + 1, visited) ||
//             backtrack(x + 1, y, word, i + 1, visited) ||
//             backtrack(x, y - 1, word, i + 1, visited) ||
//             backtrack(x, y + 1, word, i + 1, visited);
//         visited[y][x] = false;
//         return result;
//     }
//     let result: string[] = [];
//     for (let word of words) {
//         let isBreak = false;
//         for (let row = 0; row < rowL; row++) {
//             for (let col = 0; col < colL; col++) {
//                 if (backtrack(col, row, word, 0, visited)) {
//                     result.push(word);
//                     isBreak = true;
//                 }
//                 if (isBreak) break;
//             }
//             if (isBreak) break;
//         }
//     }
//     return result;
// }

export { findWords };

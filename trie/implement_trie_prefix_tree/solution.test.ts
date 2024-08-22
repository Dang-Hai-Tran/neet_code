import { Trie } from "./solution";

describe("Test trie", () => {
    it("test example 1", () => {
        let trie = new Trie();
        trie.insert("apple");
        expect(trie.search("apple")).toEqual(true);
        expect(trie.search("app")).toEqual(false);
        expect(trie.startsWith("app")).toEqual(true);
        trie.insert("app");
        expect(trie.search("app")).toEqual(true);
    });
});

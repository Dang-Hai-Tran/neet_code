import { WordDictionary } from "./solution";

describe("Test word dictionary", () => {
    it("test some normal words and words contain . when search word", () => {
        let wd = new WordDictionary();
        wd.addWord("bad");
        wd.addWord("dad");
        wd.addWord("mad");
        expect(wd.search("pad")).toEqual(false);
        expect(wd.search("bad")).toEqual(true);
        expect(wd.search(".ad")).toEqual(true);
        expect(wd.search("b..")).toEqual(true);
        expect(wd.search("b.")).toEqual(false);
    });
    it("test case 2", () => {
        let wd = new WordDictionary();
        wd.addWord("at");
        wd.addWord("and");
        wd.addWord("an");
        wd.addWord("add");
        expect(wd.search("a")).toEqual(false);
        expect(wd.search(".at")).toEqual(false);
        wd.addWord("bat");
        expect(wd.search(".at")).toEqual(true);
        expect(wd.search("an.")).toEqual(true);
        expect(wd.search("a.d.")).toEqual(false);
        expect(wd.search("b.")).toEqual(false);
        expect(wd.search("a.d")).toEqual(true);
        expect(wd.search(".")).toEqual(false);
    });
});

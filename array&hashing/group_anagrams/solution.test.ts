import { groupAnagrams } from "./solution";

describe("groupAnagrams", () => {
    it("should group anagrams together", () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const expectedOutput = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
        const result = groupAnagrams(input);
        console.log(result)
    });
});

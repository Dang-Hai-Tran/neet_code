import { LRUCache } from "./solution";

describe("Test LRU cahe", () => {
    it("Test 1", () => {
        let lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        expect(lru.get(1)).toEqual(1);
        lru.put(3, 3);
        expect(lru.get(2)).toEqual(-1);
        lru.put(4, 4);
        expect(lru.get(1)).toEqual(-1);
        expect(lru.get(3)).toEqual(3);
        expect(lru.get(4)).toEqual(4);
    });
});

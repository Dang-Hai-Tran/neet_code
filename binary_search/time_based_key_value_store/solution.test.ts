import { findMinNearest, TimeMap } from "./solution";

describe("Test time map", () => {
    test("test 1", () => {
        let timemap = new TimeMap();
        timemap.set("foo", "bar", 1);
        expect(timemap.get("foo", 1)).toEqual("bar");
        expect(timemap.get("foo", 3)).toEqual("bar");
        timemap.set("foo", "bar2", 4);
        expect(timemap.get("foo", 4)).toEqual("bar2");
        expect(timemap.get("foo", 5)).toEqual("bar2");
    });
    test("test 2", () => {
        let timemap = new TimeMap();
        timemap.set("ljfvbut", "tatthnvvid", 3);
        expect(timemap.get("ljfvbut", 4)).toEqual("tatthnvvid");
        expect(timemap.get("ljfvbut", 5)).toEqual("tatthnvvid");
        expect(timemap.get("ljfvbut", 6)).toEqual("tatthnvvid");
        expect(timemap.get("ljfvbut", 7)).toEqual("tatthnvvid");
        timemap.set("eimdon", "pdjbnnvje", 8);
        expect(timemap.get("eimdon", 9)).toEqual("pdjbnnvje");
        expect(timemap.get("eimdon", 10)).toEqual("pdjbnnvje");
    });
});

describe("Test find min nearest", () => {
    test("test 1", () => {
        let nums = [1, 4, 6];
        expect(findMinNearest(nums, 1)).toEqual(0);
        expect(findMinNearest(nums, 3)).toEqual(0);
        expect(findMinNearest(nums, 4)).toEqual(1);
        expect(findMinNearest(nums, 5)).toEqual(1);
        expect(findMinNearest(nums, 6)).toEqual(2);
        expect(findMinNearest(nums, 7)).toEqual(2);
    });
    test("test 2", () => {
        let nums = [3, 8];
        expect(findMinNearest(nums, 4)).toEqual(0);
        expect(findMinNearest(nums, 5)).toEqual(0);
        expect(findMinNearest(nums, 6)).toEqual(0);
        expect(findMinNearest(nums, 7)).toEqual(0);
        expect(findMinNearest(nums, 8)).toEqual(1);
        expect(findMinNearest(nums, 9)).toEqual(1);
        expect(findMinNearest(nums, 10)).toEqual(1);
    });
});

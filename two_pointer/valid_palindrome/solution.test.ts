import { isPalindrome } from "./solution";

describe("Test is palindrome", () => {
    test("Test 1", function () {
        let s = "A man, a plan, a canal: Panama";
        let out = true;
        expect(isPalindrome(s)).toEqual(out);
    });
});

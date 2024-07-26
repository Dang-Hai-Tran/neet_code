import { MinStack } from "./solution";

describe("Test min stack", () => {
    test("test 1", () => {
        let minstack = new MinStack();
        minstack.push(-2);
        minstack.push(0);
        minstack.push(-3);
        expect(minstack.getMin()).toEqual(-3);
        minstack.pop();
        expect(minstack.top()).toEqual(0);
        expect(minstack.getMin()).toEqual(-2);
    });
});

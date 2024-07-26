class MinStack {
    stack: number[];
    stackMin: number[];
    topNum: number | undefined;
    constructor() {
        this.stack = [];
        this.stackMin = [];
        this.topNum = undefined;
    }

    push(val: number): void {
        this.stack.push(val);
        let stackMinLen = this.stackMin.length;
        if (stackMinLen === 0) {
            this.stackMin.push(val);
        } else {
            val < this.stackMin[stackMinLen - 1]
                ? this.stackMin.push(val)
                : this.stackMin.push(this.stackMin[stackMinLen - 1]);
        }
        this.topNum = val;
    }

    pop(): void {
        this.stack.pop();
        this.stackMin.pop();
        this.topNum = this.stack[this.stack.length - 1];
    }

    top() {
        return this.topNum;
    }

    getMin() {
        return this.stackMin[this.stackMin.length - 1];
    }
}

export { MinStack };

var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }

    console.log(this.stack);
    return this.stack;
};

MinStack.prototype.pop = function () {
    let removed = this.stack.pop();
    console.log(this.stack);
    if(removed === this.getMin()){
        this.minStack.pop();
    }
    return this.stack;
};


MinStack.prototype.top = function () {
    let length = this.stack.length - 1;
    console.log(this.stack[length]);
    return this.stack[length];
};

MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};


let newstack = new MinStack();
newstack.push(12);
console.log(newstack);
newstack.top();


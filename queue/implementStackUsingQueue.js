// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).


// 5 15 25
// pop 25

// front -> 5 15 25 --> rear
// 5 ->
// q2 -> 25 15 5
// shift -> 25
// q2 -> 15 5
// q1 -> 5 15

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
}

MyStack.prototype.push = function (ele) {
    this.q1.push(ele);
}

MyStack.prototype.pop = function () {
    if (this.isEmpty()) return "Stack is empty. Pop can't be performed"

    while (this.q1.length > 0) {
        this.q2.push(this.q1.pop());
    }
    const result = this.q2.shift();

    while (this.q2.length > 0) {
        this.q1.push(this.q2.pop());
    }
    return result;
}

MyStack.prototype.top = function () {
    return this.q1.at(-1);
};

MyStack.prototype.isEmpty = function () {
    return this.q1.length === 0;
}

const obj = new MyStack();
obj.push(5)
obj.push(15)
obj.push(25)

console.log(obj.top());

console.log(obj.q1)
obj.pop()
console.log(obj.q1)


// push -> o(1)
// pop -> o(n)
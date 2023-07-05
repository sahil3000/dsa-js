// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

// front -> 2 5 7 -> rear
// dequeue -> 2

// stack -> 2 5 7
// pop -> 7 (wrong)
// stack 2 -> 7 5 2
// pop -> 2
// stack 1 -> 5 7

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.enqueue = function (ele) {
    this.stack1.push(ele);
}

MyQueue.prototype.dequeue = function () {
    if (this.empty()) return -1;
    
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
    const result = this.stack2.pop();

    while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
    }

    return result;
}

MyQueue.prototype.front = function () {
    if (this.empty()) return -1;
    return this.stack1[0];
}

MyQueue.prototype.rear = function () {
    if (this.empty()) return -1;
    return this.stack1.at(-1);
}

MyQueue.prototype.empty = function () {
    return this.stack1.length === 0;
}

const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());
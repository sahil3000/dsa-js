var MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
}

MyCircularQueue.prototype.enqueue = function (ele) {
    if (this.size === this.queue.length) return false;
    this.queue.push(ele);
    return true;
}

MyCircularQueue.prototype.dequeue = function () {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
}

MyCircularQueue.prototype.size = function () {
    return this.queue.length;
}

MyCircularQueue.prototype.front = function () {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
}

MyCircularQueue.prototype.rear = function () {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
}

MyCircularQueue.prototype.isEmpty  = function () {
    return this.queue.length === 0
}

var obj = new MyCircularQueue(3);
obj.enqueue(1);
obj.enqueue(4);
obj.enqueue(2);
obj.dequeue();
obj.enqueue(5);
obj.dequeue();
obj.enqueue(72);

console.log(obj.front(), obj.rear());
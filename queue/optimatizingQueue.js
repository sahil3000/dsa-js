class Queue {
    constructor() {
        this.items = {};
        this.rear = 0 // insert at rear end
        this.front = 0 // delete at front end
    }

    enqueue(ele) {
        this.items[this.rear] = ele;
        this.rear++;
    }

    dequeue() {
        const ele = this.items[this.front];
        delete this.items[this.front];
        this.front ++;
        return ele;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    peek() {
        return this.items[this.front] ?? null;
    }

    print() {
        console.log(this.items);
    }
}
const queue = new Queue();
console.log(queue.peek())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

queue.dequeue();
queue.enqueue(300);

console.log(queue.size());

queue.print();

queue.dequeue();

queue.print();
console.log(queue.peek())
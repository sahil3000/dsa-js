class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        this.items.push(ele);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    print() {
        let str = this.items.join(', ');
        console.log(str);
    }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(96);
myQueue.enqueue(786);

myQueue.print()

myQueue.dequeue();
myQueue.print()

myQueue.dequeue();
myQueue.dequeue();
myQueue.print()

console.log(myQueue.dequeue());
console.log(myQueue.front());

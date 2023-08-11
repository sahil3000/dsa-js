class CircleQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.front, this.rear = -1;
        this.capacity = capacity;
        this.totalItems = 0;
    }

    isFull() {
        return this.capacity === this.totalItems;
    }

    isEmpty() {
        return this.totalItems === 0;
    }

    enqueue(ele) {
        if (!this.isFull()) {
            this.rear = this.rear + 1;
            this.items[this.rear] = ele;
            this.totalItems ++;
            if (this.rear === -1) {
                this.rear = 0;
            }
        } else {
            console.log("circle queue is full. Enqueue can't be performed")
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "circle queue is empty. Dequeue can't be performed";
        }
        const ele = this.items[this.front];
        this.items[this.front] = null;
        this.front ++;
        
        return ele;
    }

    print() {
        console.log(this.items);
    }

}

const circleQueue = new CircleQueue(5);

circleQueue.enqueue(10);
circleQueue.enqueue(20);
circleQueue.enqueue(30);
circleQueue.enqueue(40);
circleQueue.enqueue(50);
circleQueue.enqueue(60);

circleQueue.print();
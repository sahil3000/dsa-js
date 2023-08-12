class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.tail = node; 
        } else {
            node.next = this.head;
        }
        this.head = node;
        this.size ++;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            this.tail.next = node
        }
        this.tail = node;
        this.size ++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            console.log("No elment in linked list");
            return null;
        }
        if (this.getSize() === 1) {
            this.tail = null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size --;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("No elment in linked list");
            return null;
        }
        const value = this.tail.value;
        if (this.getSize() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
    
            while (prev.next.next) {
                prev = prev.next;
            }
    
            prev.next = null;
            this.tail = prev;
        }

        this.size --;
        return value;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Linked List is empty")
            return;
        }
        let list = "";

        let prev = this.head;

        while (prev) {
            list += `${prev.value} `
           prev =  prev.next;
        }
        console.log(list)
    }
}
module.exports = LinkedList;
// const linkedList = new LinkedList();
// console.log("LinkedList is empty?", linkedList.isEmpty());
// console.log("LinkedList size", linkedList.getSize());

// linkedList.prepend(10);
// linkedList.prepend(20);
// linkedList.prepend(30);

// linkedList.append(130);
// linkedList.append(3220);

// linkedList.print();

// console.log("reverse");
// linkedList.reverse()

// linkedList.print();

// linkedList.removeFromFront();
// linkedList.print();

// console.log(linkedList.removeFromFront());
// console.log(linkedList.removeFromFront());
// console.log(linkedList.removeFromFront());
// console.log(linkedList.removeFromFront());
// console.log(linkedList.removeFromFront());
// linkedList.print();

// linkedList.prepend(30);

// linkedList.append(130);
// linkedList.append(3220);
// linkedList.print(); 
// console.log("removeFromEnd", linkedList.removeFromEnd());
// console.log("removeFromEnd", linkedList.removeFromEnd());
// console.log("removeFromEnd", linkedList.removeFromEnd());
// linkedList.print();

// linkedList.append(3220);
// console.log(linkedList.head)
// console.log(linkedList.tail)
// linkedList.print();
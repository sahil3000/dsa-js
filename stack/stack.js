class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    isEmpty() {
        return this.stack.length === 0
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty. Can't perform pop";
        }
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty. Can't perform pop";
        }
        return this.stack.length - 1;
    }

    print() {
        console.log(this.stack);
    }
}

const obj = new Stack();
console.log(obj.isEmpty());
obj.push(30);
obj.push(4);
obj.push(1);
obj.push(2);
obj.push(3);

obj.print();
obj.peek();

obj.pop();
console.log(obj.peek());
obj.size();

obj.print();
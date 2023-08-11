class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log(`invalid index. There are ${this.getSize()} element in the linked list`);
            return null;
        }

        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            this.size++;
        }
    }

    remove(index) {
        if (this.isEmpty()) {
            console.log("No element in linked list")
            return;
        }
        if (index < 0 || index >= this.size) {
            console.log(`invalid index. There are ${this.getSize()} element in the linked list`);
            return null;
        }
        let node;
        if (index === 0) {
            node = this.head;
            this.head = this.head.next;

        } else {
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            node = prev.next;
            prev.next = node.next;
        }
        this.size--;
        return node.value;
    }

    removeByValue(value) {
        if (this.isEmpty()) {
            console.log("No element in linked list")
            return;
        }
        let deleteElement;
        if (this.head.value === value) {
            deleteElement = this.head.value;
            this.head = this.head.next;
            this.size--;
        } else {
            let prev = this.head;

            while (prev) {
                if (prev.next && prev.next.value === value) {
                    deleteElement = value;
                    prev.next = prev.next.next;
                    this.size--;
                    break;
                }
                prev = prev.next;
            }
        }

        if (deleteElement) {
            return deleteElement;
        } else {
            console.log(`${value} is not exist in linked list`);
            return -1;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }

        let curr = this.head;
        let index = 0;
        while(curr) {
            if (curr.value === value) {
                return index -1;
            }
            curr = curr.next;
            index ++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
          let next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
        }
        this.head = prev;
      }

    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let current = this.head;
            let list = "";
            while (current) {
                list += `${current.value} `
                current = current.next;
            }
            console.log(list);
        }
    }

}

const linkedList = new LinkedList();
console.log("search 3000 at ", linkedList.search(3000));
console.log("LinkedList is empty?", linkedList.isEmpty());
console.log("LinkedList size", linkedList.getSize());

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

console.log("LinkedList size", linkedList.getSize());

linkedList.print();
linkedList.reverse();
linkedList.print();


// linkedList.append(50);
// linkedList.append(60);
// linkedList.prepend(1);

// linkedList.print();

// linkedList.insert(2, 1);
// linkedList.insert(600, 5);
// linkedList.insert(160, 8);
// linkedList.insert(155, 10);
// linkedList.insert(22, -2);
// linkedList.print();

// console.log("search 30 at ", linkedList.search(30));
// console.log("search 3000 at ", linkedList.search(3000));

// console.log(linkedList.remove(2));
// console.log(linkedList.remove(0));
// console.log(linkedList.remove(3));
// console.log(linkedList.remove(6));
// console.log(linkedList.remove(4));
// linkedList.print();

// console.log(linkedList.removeByValue(20));
// console.log(linkedList.removeByValue(2));
// console.log(linkedList.removeByValue(250));
// console.log(linkedList.removeByValue(10));
// // console.log(linkedList.removeByValue(50));
// // console.log(linkedList.removeByValue(160));
// linkedList.print();

// console.log(linkedList.getSize());

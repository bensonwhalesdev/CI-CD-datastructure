// Linked List
// => Single linked list (One way direction) It;s a linear data sturcture pattern that follows the LIFO(Last in first out) approach
// => Double linked list (Two way direction)

// SL
class Node {
  constructor(Value) {
    this.Value = Value; // the value can be any data type
    this.next = null; // This is a pointer, pointing to the next node
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  appendList(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  prependList(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insertAt(val, index) {
    if (index > this.length) {
      return "Index out of range";
    }

    if (index === 0) {
      this.prependList(val);
      return this;
    }

    const node = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = node;
    node.next = temp;

    this.length++;
    return this;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return this;
    }
    const prev = this.get(index - 1);
    const temp = prev.next.next;
    prev.next = temp;
    this.length--;
    return this;
  }

  toArray() {
      const arr = [];
      let current = this.head;
      while(current) {
          arr.push(current.Value);
          current = current.next;
      }
      return arr;
  }

}

const myElement = new SingleLinkedList();
myElement.appendList("Daniel");
myElement.appendList("Moses");
myElement.appendList("Kamau");
console.log(myElement);
myElement.prependList("Kiprop");
console.log(myElement);
console.log(myElement.insertAt("kazeem", 1));
console.log(myElement.removeAt(1));
console.log(myElement.toArray());

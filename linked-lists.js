export class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = {value: value, next: null};
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = {value: value, next: this.head};
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;  
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = {value: value, next: existingNode.next};
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedItem;
  }

  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

const linkedListOne = new LinkedList();
linkedListOne.append(1);
linkedListOne.append('Hello There');
linkedListOne.append('Zach');
linkedListOne.append('Zach');
linkedListOne.append(true);
linkedListOne.append(18.50);
linkedListOne.prepend('First Value');
linkedListOne.prepend('First Value');

console.log(linkedListOne.toArray());

linkedListOne.delete('Zach');
linkedListOne.delete('First Value');
linkedListOne.delete(18.50);

console.log(linkedListOne.toArray());
console.log(linkedListOne.find('Zach'));
console.log(linkedListOne.find('Hello There'));

linkedListOne.insertAfter('New Value - 1', 1);
linkedListOne.insertAfter('New Value - 2', 'Hello There');

console.log(linkedListOne.toArray());


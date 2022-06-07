class LinkedList {
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
linkedListOne.append(true);
linkedListOne.append(18.50);
linkedListOne.prepend('First Value');

console.log(linkedListOne.toArray());

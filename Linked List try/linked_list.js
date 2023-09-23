// let n1 = {
//     data: 100,
// }
// let n2 = {
//     data: 200,
// }
// n1.next = n2;
// console.log(n1);

class Node {
  constructor(head, next = null) {
    this.head = head;
    this.next = next;
  }
}

// let n1 = new Node(100, new Node(200))
// console.log(n1);

class LinkeDList {
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  // Insert at head

  inserAtHead(data) {
    this.head = new Node(data, this.head);
    this.listSize++;
  }

  // Insert at End

  inserAtTail(data) {
    let node = new Node(data);
    let current;

    // If empty - make that node head
    if(!this.head) {
        this.head = node;
    } else {
        current = this.head;
    }
    while (this.next) {
        current = this.next;
    }
    current = node;


    this.listSize++;
  }

  // Insert at any Index

  // Get and Node Index

  // Clear List

  // Print List Data

//   printListData() {
//     let currentNode = this.head;
//     while (currentNode) {
//       console.log(currentNode.data);
//       currentNode = currentNode.next;
//     }
//   }
}

// Print the Linked List Object format

let ll = new LinkeDList();
// ll.inserAtHead(100);
// ll.inserAtHead(200);
// ll.inserAtHead(300);
ll.inserAtTail(100);
ll.inserAtTail(200);
console.log(ll);

// ll.printListData();

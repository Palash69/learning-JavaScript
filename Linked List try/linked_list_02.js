class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.listSize = 1;
    }


    appendInLinkedList(nodeData) {
        let newNode = {
            value: nodeData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.listSize++;
    }
}




let myLinkedList = new LinkedList(100);
myLinkedList.appendInLinkedList(200);
myLinkedList.appendInLinkedList(300);
console.log(myLinkedList);
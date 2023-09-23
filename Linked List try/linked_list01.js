class LinkedList{
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
    }
    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

let linkList = new LinkedList(100);
linkList.appendNode(200);
linkList.appendNode(300);
console.log(linkList);


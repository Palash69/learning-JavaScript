// 10-->16-->20

class LinkList{
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        if(!data) {
            this.size = 0;
        } else {
            this.size = 1;
        }
    }

    append(data) {
        let newNode = {
            value: data,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
         
        this.size++;
    }

    prepend(data) {
        let newNode = {
            value: data,
            next: null,
        }
        let currNode;
        currNode = this.head;
        this.head = newNode;
        newNode.next = currNode;
        this.size++;
    }

    insertAtPos(data, position) {
        if(this.size >= position) {
           
        } else {
            console.log(`Position does not exist, this list has ${this.size} elements.`);
        }
    }

}

let myList = new LinkList(10)

myList.append(16);
myList.append(20);
// myList.append(25);
myList.prepend(5);
myList.insertAtPos(69, 5)

console.log(myList);

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
}

let myList = new LinkList(10)

myList.append(16);
myList.append(20);
myList.append(25);

console.log(myList);

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
}

let myList = new LinkList(10)

console.log(myList);
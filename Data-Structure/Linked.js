const list = {
    head: {
        value: 90,
        next: {
            value: 10,
            next: {
                value: 89,
                next: {
                    value: 100,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init')
        this.head = init;
        this.tail = init;
        this.현재노드 = undefined
        this.데이터수 = 0;
    }

    length() {
        return this.데이터수;
    }

    append() {
        let 새로운노드 = new Node(data);

        this.tail.next = 새로운노드
        this.tail = 새로운노드
        this.데이터수 += 1;
    }

    toString() {
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';

        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}`
        }
        return `[${s.slice(0, -1)}]`
    }

    get fullData() {
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';

        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}`
        }
        return JSON.parse(`[${s.slice(0, -1)}]`)
    }

    insert(index, data) {
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }
        let 새로운노드 = new Node(data)

        새로운노드.next = 순회용현재노드.next;
        순회용현재노드.next = 새로운노드;

        this.데이터수 += 1
    }
}
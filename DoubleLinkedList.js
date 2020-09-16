var DoubleLinkedList = (function () {
    function Node (data) {
        this.data = data;
        this.nextNode = null;
        this.prevNode = null;
    }

    function DoubleLinkedList () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    DoubleLinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            node.prevNode = this.tail;
            this.tail = node;
        }

        this.length++;
    }

    DoubleLinkedList.prototype.remove = function (index) {
        if (!this.head) return;

        if (index == 0) {
            var current = this.head;
            if (current.nextNode) {
                this.head = current.nextNode;
                this.head.prevNode = null;
            } else {
                this.head = null;
                this.tail = null;
            }
                
            delete current;
        } else if (index == this.length - 1) {
            var current = this.tail; 

            this.tail = current.prevNode;
            this.tail.nextNode = null;
            delete current;
        } else {
            var current = this.head;
            var currentIndex = 0;

            while (currentIndex != index) {
                current = current.nextNode;
                currentIndex++;
            }
    
            current.prevNode.nextNode = current.nextNode;
            current.nextNode.prevNode = current.prevNode;
            delete current;
        }

        this.length--;
    }

    DoubleLinkedList.prototype.get = function (index) {
        var current = this.head;
        var currentIndex = 0;

        if (!current) return;

        if (index == 0) {
            return this.head.data;
        } else if (index == this.length - 1) {
            return this.tail.data;
        } else {
            while (currentIndex != index) {
                current = current.nextNode;
                currentIndex++;
            }
        }

        return current.data;
    }

    DoubleLinkedList.prototype.insert = function (data, index) {
        var node = new Node(data);
        var current = this.head;
        var currentIndex = 0;

        if (!current) return;

        if (index == 0) {
            this.head.prevNode = node;
            node.nextNode = this.head;
            this.head = node;
        } else {
            while (currentIndex != index) {
                current = current.nextNode;
                currentIndex++;
            }
    
            node.prevNode = current.prevNode;
            node.nextNode = current;
            current.prevNode.nextNode = node;
            current.prevNode = node;
        }

        this.length++;
    }

    DoubleLinkedList.prototype.getAll = function () {
        var list = [];
        var current = this.head;
        while (current) {
            list.push(current.data);
            current = current.nextNode;
        }

        return list;
    }

    return DoubleLinkedList;
}());

var list = new DoubleLinkedList();
list.add(3);
list.remove(0);
console.log(list.get(0));
list.add(55);
list.add(2);
console.log(list.getAll());
list.remove(1);
console.log(list.getAll());
list.insert(30, 0);
console.log(list.get(1));
list.remove(0);
console.log(list.getAll());
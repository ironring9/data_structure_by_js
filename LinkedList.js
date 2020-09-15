var LinkedList = (function () {
    function Node (data) {
        this.data = data;
        this.nextNode = null;
    }

    function LinkedList () {
        this.length = 0;
        this.head = null;
    }

    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        var current = this.head;
        if (!current) {
            this.head = node;
        } else {
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }

        this.length++;
    }

    LinkedList.prototype.remove = function (index) {
        var current = this.head;
        var currentIndex = 0;
        if (!current) return;

        if (index == 0) {
            var node = this.head;
            this.head = node.nextNode;
            delete node;
        } else {
            while (current) {
                if (index == currentIndex + 1) break;
    
                current = current.nextNode;
                currentIndex++;
            }
    
            var node = current.nextNode;
            current.nextNode = node.nextNode;
            delete node;
        }

        this.length--;
    }

    LinkedList.prototype.get = function (index) {
        var current = this.head;
        var currentIndex = 0;

        while (current) {
            if (index == currentIndex) break;

            current = current.nextNode;
            currentIndex++;
        }

        return current.data;
    }

    LinkedList.prototype.insert = function (data, index) {
        var node = new Node(data);
        var current = this.head;
        var currentIndex = 0;

        if (index == 0) {
            this.head = node;
        } else {
            while (current) {
                if (index == currentIndex + 1) break;

                current = current.nextNode;
                currentIndex++;
            }

            node.nextNode = current.nextNode;
            current.nextNode = node;
        }

        this.length++;
    }

    LinkedList.prototype.getAll = function () {
        var list = [];
        var current = this.head;
        while (current) {
            list.push(current.data);
            current = current.nextNode;
        }

        return list;
    }

    return LinkedList;
})();

var list = new LinkedList();
list.add(3);
console.log(list.get(0));
list.add(55);
list.add(2);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
list.insert(30, 1);
console.log(list.get(1));
console.log(list.getAll());
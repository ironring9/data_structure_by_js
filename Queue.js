var Queue = (function () {
    function Node (data) {
        this.data = data;
        this.next = null;
    }

    function Queue () {
        this.count = 0;
        this.front = null;
        this.back = null;
    }

    Queue.prototype.enqueue = function (data) {
        var node = new Node(data);

        if (!this.front) {
            this.front = node;
        } else {
            this.back.next = node;
        }

        this.back = node;
        return ++this.count;
    }

    Queue.prototype.dequeue = function () {
        var node = this.front;
        var data = node.data;

        this.front = node.next;

        return data;
    }

    Queue.prototype.front = function () {
        return this.front.data;
    }

    return Queue;
})();

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

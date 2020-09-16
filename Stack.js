var Stack = (function () {
    function Node (data) {
        this.data = data;
        this.next = null;
    }

    function Stack () {
        this.count = 0;
        this.top = null;
    }

    Stack.prototype.push = function (data) {
        var node = new Node(data);
        node.next = this.top;
        this.top = node;
        return ++this.count;
    }

    Stack.prototype.pop = function () {
        if (this.count == 0) return null;
        
        var node = this.top;
        var data = node.data;
        this.top = node.next;
        this.count--;
        delete node;
        return data;
    }

    Stack.prototype.top = function () {
        return this.top.data;
    }

    return Stack;
})();

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


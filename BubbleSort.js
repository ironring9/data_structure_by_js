var list = [5,1,9,7,2,3];

Array.prototype.bubbleSort = function () {
    for (var i = this.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
}

console.log(list);
list.bubbleSort();
console.log(list);
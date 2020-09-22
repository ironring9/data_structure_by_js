var list = [5,1,3,7,2,9];

Array.prototype.selectionSort = function () {
    var minIndex;
    for (var i = 0, len = this.length; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (this[minIndex] > this[j]) {
                minIndex = j;
            }
        }
        [this[i], this[minIndex]] = [this[minIndex], this[i]];
    }
}

console.log(list);
list.selectionSort();
console.log(list);
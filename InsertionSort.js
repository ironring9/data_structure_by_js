var list = [5,1,3,7,2,9];

Array.prototype.insertionSort = function () {
    var temp;
    for (var i = 1, len = this.length; i < len; i++) {
        temp = this[i];
        for (var j = i - 1; j >= 0 && temp < this[j]; j--) {
            this[j + 1] = this[j];
        }
        this[j + 1] = temp;
    }
}

console.log(list);
list.insertionSort();
console.log(list);
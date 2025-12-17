var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    return MyArray;
}());
var myNewArray = new MyArray();
myNewArray.push('apple');
myNewArray.push('mango');
myNewArray.push('banana');
console.log(myNewArray);
var capitalize = function (str) {
    return str.split(" ").map(function (word) { return word[0].toUpperCase() + word.slice(1); }).join(" ");
};
console.log(capitalize("sheriff abdullateef"));
var chunk = function (array, size) {
    var chunked = [];
    var index = 0;
    while (index < array.length) {
        var chunk_1 = array.slice(index, index + size);
        chunked.push(chunk_1);
        index += size;
    }
    return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

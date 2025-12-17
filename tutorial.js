var studentsDatabase = ['wasiu', 'sheriff', 'tayo', 'bolu', 'aaron'];
function findStudents(x, y) {
    console.log(x.some(function (a) { return a === y; }));
}
findStudents(studentsDatabase, 'sheriff');
var numbers = [1, 2, 3, 4, 5];
var getElements = function (arr, index) { return arr[index]; };
console.log(getElements(numbers, 2));
function findPairs(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            console.log("pairs: ".concat(array[i], ", ").concat(array[j]));
        }
    }
}
findPairs(numbers);

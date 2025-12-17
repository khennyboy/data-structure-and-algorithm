type stdData = string[] | number[]
let studentsDatabase: stdData = ['wasiu', 'sheriff', 'tayo', 'bolu', 'aaron']

function findStudents(x: string[], y: string) {
    console.log(x.some(a => a === y))
}
findStudents(studentsDatabase, 'sheriff')

const numbers = [1, 2, 3, 4, 5]
const getElements = (arr: stdData, index: number) => arr[index]
console.log(getElements(numbers, 2))

function findPairs(array: stdData) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(`pairs: ${array[i]}, ${array[j]}`)
        }
    }
}
findPairs(numbers)

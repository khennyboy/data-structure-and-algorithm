class MyArray {
    length: number
    data: any
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item: any) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('banana')
console.log(myNewArray)


const capitalize = (str: string) => {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("sheriff abdullateef"))

const chunk = (array: number[], size: number) => {
    const chunked: any = [];
    let index = 0
    while (index < array.length) {
        const chunk: number[] = array.slice(index, index + size)
        chunked.push(chunk)
        index += size
    }
    return chunked
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
 
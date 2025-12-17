class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }
  _hashFunction(key) {
    let sum = 0;

    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 95;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }
  set(key, value) {
    const index = this._hashFunction(key);
    console.log(!this.keyMap[index]);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  getAllValues() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values.join(", ");
  }
}

const phoneBook = new HashTable();
phoneBook.set("john", "555-333-444");
phoneBook.set("bayo", "666-555-444");
phoneBook.set("bayo", "666-555-444");
console.log(phoneBook.get("john"));
console.log(phoneBook.getAllValues());

function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    console.log(compliment);
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 4, 9, 4], 13));

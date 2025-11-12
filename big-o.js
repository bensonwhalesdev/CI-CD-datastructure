// CUSTOM ARRAy
// square bracket -->
// push, pop,  (shift, unshift, length, slice, getIndex)
class personalArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  pusher(val) {
    this.data[this.lenght] = val;
    this.lenght++;
    return this.lenght;
  }

  pop() {
    delete this.data[this.lenght - 1];
    this.lenght--;
    return this.lenght;
  }

  shift() {
    let firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(val) {
    for (let i = this.lenght - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.lenght++;
    return this.lenght;
  }

  getIndex(index) {
    return this.data[index];
  }

  slice(start, end) {
    let sliceArray = [];
    for (let i = start; i < end; i++) {
      sliceArray.push(this.data[i]);
    }
    return sliceArray;
  }
}

let hobbies = new personalArray();
hobbies.pusher("Cooking");
hobbies.pusher("Reading");
hobbies.pusher("Sleeping");
hobbies.pusher("Chilling");

console.log(hobbies);
console.log(hobbies.shift());
console.log(hobbies.getIndex(2));
console.log(hobbies.slice(1, 2));
console.log(hobbies.unshift("swimming"));
console.log(hobbies.data);


// hobbies,getIndex(1) should return reading

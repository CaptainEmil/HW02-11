"use strict";

console.clear();


function createStudent(name, age, group) {
    return {
        name: name,
        age: age,
        group: group
    }
}

function Student(name, age, group) {
    const koreanAge = age + 1;

    let _name = name;
    let _age = age;
    let _group = group;
    let _koreanAge = koreanAge;

    if (new.target === undefined) {
        return {
            'FULL_NAME': name,
            'AGE': age,
            'GROUP': group
        }
    }
}

const s1 = createStudent('Novruz', 25, 233);
const s2 = createStudent('Novruz', 25, 233);
const s3 = new Student('Alex', 25, 233);
const s4 = Student('Alex', 25, 233);

console.log(s3);
console.log(s4);
console.clear();

function MyArray(...args) {
    this.elements = {
        length: 0
    }

    this.push = function(...args) {
        for (const arg of args) {
            const index = this.elements.length;
    
            this.elements[index] = arg;
    
            ++this.elements.length;
        }

        return this.elements.length;
    }

    this.pop = function() {
        const length = this.elements.length;

        if (length === 0) return;

        const lastItem = this.elements[length - 1];

        delete this.elements[length - 1];

        --this.elements.length;

        return lastItem;
    }

    this.shift = function() {
        const length = this.elements.length;

        if (length === 0) return;

        const firstItem = this.elements[0];

        delete this.elements[0];

        --this.elements.length;

        return firstItem;
    }

    this.unshift = function(...newElements) {
        const newArr= new MyArray(...newElements,...Object.values(this.elements));
        this.elements.length=0;
        Object.values(newArr.elements).map((x,i)=>{
            this.elements[i]=x;
            this.elements.length++;
        });

        return this.elements.length;
    }

    this.push(...args);
}

const arr = new MyArray(1, '2', [3]);

console.log(arr.elements);

arr.push(['4'], {x: 5}, null);

console.log(arr.elements);

const lastItem = arr.pop();

console.log(lastItem, arr.elements);

const firstItem = arr.shift();

console.log(firstItem, arr.elements);

const length = arr.unshift(5,6,7,8);

console.log(length, arr.elements);
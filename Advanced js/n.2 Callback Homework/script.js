let numbers = [1, 2, 3, 4, 5];
let grades = [8, 10, 6, 6, 7, 9, 8, 6, 8, 10];


//-----custom forEach------

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

myForEach(numbers, number => {
    console.log(number, 'Custom forEach');
});

//bonus ForEach

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

numbers.myForEach(number => {
    console.log(number, 'Array.prorotype.forEach');
});



//-----custom filter------

function myFilter(arr, callback) {
    let highGrades = [];
    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);
        if (value) {
            highGrades.push(arr[i]);
        }
    }
    return highGrades;
}

let value = myFilter(grades, grade => {
    if (grade > 7) {
        return true;
    }
    return false;
})

console.log(value, 'Custom filter');


//bonus filter

Array.prototype.myFilter = function (callback) {
    let highGrades = [];
    for (let i = 0; i < this.length; i++) {
        let value = callback(this[i]);
        if (value) {
            highGrades.push(value);
        }
    }
    return highGrades;
}

let filterArray = grades.myFilter(grade => {
    if (grade > 7) {
        return grade;
    }
});

console.log(filterArray, 'Array.protorype.myFilter');



//-----custom map------

function myMap(arr, callback) {
    let highGrades = [];
    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);
        if (value !== undefined) {
            highGrades.push(value);
        }
    }
    return highGrades;
}

let newGrades = myMap(grades, grade => {
    return grade + 1;
});

console.log(newGrades);

//bonus map

Array.prototype.myMap = function (callback) {
    let highGrades = [];
    for (let i = 0; i < this.length; i++) {
        let value = callback(this[i]);
        if (value !== undefined) {
            highGrades.push(value);
        }
    }
    return highGrades;
}

let newArray = grades.myMap(grade => {
    return grade + 1;
});

console.log(newArray);






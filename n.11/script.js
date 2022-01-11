//---Part One---

// let message = ["Hello", "there", "students", "of", "SEDC!",];

// function printMessage(arr) {
//     let text = "";
//     for (let i = 0; i < arr.length; i++) {
//         text += arr[i] + " ";
//     }
//     return text;
// }

// console.log(printMessage(message));


//---Part Two---


// function printNumbers() {
//     let nums = "";
//     for (let i = 1; i <= 20; i++) {
//         if (i % 2 === 0) {
//             nums += i + "\n";
//         } else {
//             nums += i + " ";
//         }
//     }
//     return nums;
// }

// console.log(printNumbers());


//---Part Three---

// let array = [450, 34, 5, 10, "Bottle", NaN, 226, 34];

// function sumMinMax(arr) {
//     min = arr[0];
//     max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (numberValidator(arr[i]) === true) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//     }
//     console.log(min, max)
//     return min + max;
// }
// console.log(sumMinMax(array));


// function numberValidator(value) {
//     if (isNaN(value)) {
//         return false;
//     }

//     if (!Number.isFinite(value)) {
//         return false;
//     }
//     if (typeof value !== "number") {
//         return false;
//     }
//     return true;
// }


//---Part Four---


let firstName = ['Filip', 'Irena', 'Donald', 'Ane'];
let lastName = ['Alempijevik', 'Gjorgjiev', 'Trump', 'Dimkovska'];

function connect(arr1, arr2) {
    let fullName = [];
    for (let i = arr1.length - 1; i > -1; i--) {       // doing reverse just for fun :)
        fullName.push(`${i + 1}. ${arr1[i]} ${arr2[i]}`)
        console.log(`Hello ${arr1[i]} ${arr2[i]}`);
    }
    console.log(fullName);
}

connect(firstName, lastName);
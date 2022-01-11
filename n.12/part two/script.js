let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let container = document.querySelector('#container');
let ul = document.querySelector('ul');


function createList(nums) {
    for (let num of nums) {
        let li = document.createElement('li');
        li.innerText = num;
        container.append(li);
    }
}

createList(numbers);

function printSum(arr) {
    let p = document.createElement('p');
    let result = 0;
    let equation = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i === arr.length - 1) {
            equation += `${arr[i]} = ${result}`;
        } else {
            equation += `${arr[i]} + `;
        }
    }
    p.innerHTML = `${result} </br> ${equation}`;
    container.append(p);
}

printSum(numbers);

















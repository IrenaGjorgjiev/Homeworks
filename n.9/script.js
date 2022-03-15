// --- Part One-- -

let arr = [22, "Irena", undefined, true, [1, 2, 3]];


function findValue(param) {
    for (let i = 0; i < param.length; i++) {
        console.log(typeof param[i]);
    }
    return;
}

// console.log(findValue(arr));


// --- Part Two-- -

let hoomanAge = 1;
let doggoAge = 7;

let userInput = prompt("Whoose age would you like to calculate? Choose Dog or Human");
let ageInput = prompt("Enter the age you would like to convert");


function calculateAge(hooman, doggo, firstInput, age) {
    if (firstInput === "dog") {
        doggo = age * 7;
        return alert(`Your dogs age is ${doggo}`);
    } else if (firstInput === "human") {
        hooman = age / 7;
        return alert(`Your human age is ${hooman}`)
    }
}

calculateAge(hoomanAge, doggoAge, userInput, ageInput);


// --- Part Three-- -

let currStatus = 10000;
let ammount = Number(prompt("Enter the ammount of money you would like to take out"));

function atmMachine(status, withdrawal) {
    if (withdrawal < status) {
        status -= withdrawal;
        return alert(`You ammount was ${ammount}. You have ${status}den left on you bank account.`)
    } else if (withdrawal > status) {
        return alert("Not Enough Money.")
    }
}

atmMachine(currStatus, ammount);
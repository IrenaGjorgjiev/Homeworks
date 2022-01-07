// -----First solution (the 'Good job, but not so good job' one xD)

// let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// let user_birthyear = prompt("Enter your birth year");
// let user_sign = (user_birthyear - 4) % 12;

// alert(`Your sign is ${zodiac[user_sign]}`);




// -----Second solution (normal function)

// let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// let user_birthyear = prompt("Enter your birth year");

// function calculate(p1, p2) {
//     p2 = (user_birthyear - 4) % 12;
//     return `Your Chinese Zodiac sign is ${p1[p2]}`;
// };

// alert(calculate(zodiac, user_birthyear));




// ----- Second solution (arrow function)

// let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// let user_birthyear = prompt("Enter your birth year");

// let calculate = (p1, p2) => {
//     p2 = (user_birthyear - 4) % 12;
//     return `Your Chinese Zodiac sign is ${p1[p2]}`;
// };

// alert(calculate(zodiac, user_birthyear));




// ----- Third solution (if statement)


let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

function calculate(p1) {
    let user_birthyear = prompt("Enter your birth year");
    let sign = (user_birthyear - 4) % 12;
    if (isNaN(user_birthyear)) {
        return calculate(p1);
    } else {
        return `Your Chinese Zodiac sign is ${p1[sign]}`;
    }
}

alert(calculate(zodiac));
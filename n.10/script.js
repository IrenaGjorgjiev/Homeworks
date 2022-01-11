//---Part One---

// let myPet = {
//     type: "cat",
//     name: "Bagheera",
//     mood: "a bit crazy",
//     activity: "meowing at the neighbours"
// }

// function tellStory(pet) {
//     return console.log(`This is my ${pet.type} ${pet.name}. ${pet.name} is a nice ${pet.type}. Today he is ${pet.mood}. He's been ${pet.activity} all day.`);
// }

// tellStory(myPet);


//---Part Two---

let numbers = [1, 2, 3, 4, 5];


function sumOfArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (numberValidator(arr[i])) {
            total += arr[i];
        } else {
            return `${arr[i]} is not a number.`;
        }
    }
}

function numberValidator(value) {
    if (isNaN(value)) {
        return false;
    }
    if (isFinite(value)) {
        return false;
    }
    if (typeof value !== "number") {
        return false;
    }
    return true;
}

console.log(sumOfArray(numbers));
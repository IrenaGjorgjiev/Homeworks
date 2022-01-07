let phonePrice = Number(prompt("Enter the phone price"));
let amount = Number(prompt("Enter the ammount of phones"));

function calculate(price, amount) {
    let tax = (5 / 100) * price;
    let result = (phonePrice + tax) * amount;
    return result;
}

console.log(calculate(phonePrice, amount));
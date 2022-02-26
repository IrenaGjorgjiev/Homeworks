let personBtn = document.querySelector('#personBtn');
let rocketBtn = document.querySelector('#rocketBtn');
let personSection = document.querySelector('.person_section');
let rocketSection = document.querySelector('.ship_section');
let startSection = document.querySelector('.start_section');
let ships = [];

class ShipDetails {
    constructor(cost, cargoCapacity, peopleCapacity, shipClass) {
        this.cost = cost;
        this.cargoCapacity = cargoCapacity;
        this.peopleCapacity = peopleCapacity;
        this.shipClass = shipClass;
    }
}

class Ship extends ShipDetails {
    constructor(name, model, manufacturer, cost, cargoCapacity, peopleCapacity, shipClass) {
        super(cost, cargoCapacity, peopleCapacity, shipClass);
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
    }
}

async function fetchData(url) {
    let call = await fetch(url);
    let dataJson = await call.json();
    return dataJson;
}

personBtn.addEventListener('click', function () {
    startSection.toggleAttribute('hidden');
    personSection.toggleAttribute('hidden');

    fetchData('https://swapi.dev/api/people')
        .then(data => {
            console.log(data);
            let tbody = document.querySelector('#person_b');
            let html = '';
            data.results.forEach(element => {
                html += `  
            <tr>
                <td>${element.name}</td>
                <td>${element.height}</td>
                <td>${element.mass}</td>
                <td>${element.gender}</td>
                <td>${element.birth_year}</td>
                <td>${element.homeworld}</td>
                <td>${element.films.length}</td>
            </tr>`
            });
            tbody.innerHTML = html
        });
})

rocketBtn.addEventListener('click', function () {
    startSection.toggleAttribute('hidden');
    rocketSection.toggleAttribute('hidden');

    fetchData('https://swapi.dev/api/starships')
        .then(data => {
            console.log(data);
            let tbody = document.querySelector('#ship_b');
            data.results.forEach(element => {
                let ship = new Ship(element.name, element.model, element.manufacturer, element.cost_in_credits, element.cargo_capacity, element.passengers, element.starship_class);
                ships.push(ship);
                let row = document.createElement('tr');
                let nameTd = document.createElement('td');
                let modelTd = document.createElement('td');
                let manufacturerTd = document.createElement('td');
                let detailsTd = document.createElement('td');

                nameTd.innerText = ship.name;
                modelTd.innerText = ship.model;
                manufacturerTd.innerText = ship.manufacturer;
                detailsTd.innerText = 'Details';

                row.append(nameTd, modelTd, manufacturerTd, detailsTd);
                tbody.append(row);
            });
            console.log(ships);
        });
})


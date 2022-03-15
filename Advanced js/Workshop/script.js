let personBtn = document.querySelector('#personBtn');
let shipBtn = document.querySelector('#shipBtn');
let startSection = document.querySelector('.start_section');
let tableSection = document.querySelector('.table_section');
let backBtn = document.querySelector('#back');
let nextBtn = document.querySelector('#next');
let previousBtn = document.querySelector('#previous');
let details = document.querySelector('.details')

let tableHead = document.querySelector('#tableHead');
let tableBody = document.querySelector('#tableBody');

const memory = {
    url: 'https://swapi.dev/api/',
    people: 'https://swapi.dev/api/people',
    ships: 'https://swapi.dev/api/starships',
    peopleTableArr: ['Name', 'Height', 'Mass', 'Gender', 'Birth Year', 'Homeworld', 'Movie Appearances'],
    shipTableArr: ['Name', 'Model', 'Manufacturer'],
    contextTypes: {
        people: 'people',
        ships: 'ships'
    },
    collection: null,
    context: null
}

const translation = {
    "name": 'Name',
    "model": 'Model',
    "manufacturer": 'Manufacturer',
    "cost_in_credits": 'Cost in Credits',
    "length": 'Length',
    "max_atmosphering_speed": 'Max Atmosphering Speed',
    "crew": 'Crew',
    "passengers": 'Passengers',
    "cargo_capacity": 'Cargo Capacity',
    "consumables": 'Consumables',
    "hyperdrive_rating": 'Hyperdrive Rating',
    "MGLT": 'MGLT',
    "starship_class": 'Starship Class',
    "pilots": 'Pilots',
    "films": 'Films',
    "created": 'Created',
    "edited": 'Edited',
    "url": 'Url',
}

async function fetchData(url) {
    let call = await fetch(url);
    let dataJson = await call.json();
    memory.collection = dataJson;
    console.log(dataJson)
    return dataJson;
}

async function generateTable(url, thContext, context) {
    memory.collection = await fetchData(url);
    tableHead.append(generateTableHead(thContext));
    generateTableBody(memory.collection.results, context, tableBody);

}

function generateTableHead(tHeadContent) {
    let row = document.createElement('tr');
    tHeadContent.forEach(element => {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = element;
        row.append(th);
    });
    return row;
}

function generateTableBody(tBodyContent, context, body) {
    tBodyContent.forEach(element => {
        if (context === memory.contextTypes.people) {
            body.append(humanTable(element));
        } else if (context === memory.contextTypes.ships) {
            body.append(shipTable(element));
        }
    })
}

function humanTable(person) {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let height = document.createElement('td');
    let mass = document.createElement('td');
    let gender = document.createElement('td');
    let year = document.createElement('td');
    let homeworld = document.createElement('td');
    let films = document.createElement('td');
    name.innerText = person.name;
    height.innerText = person.height;
    mass.innerText = person.mass;
    gender.innerText = person.gender;
    year.innerText = person.birth_year;
    homeworld.innerText = person.homeworld;
    films.innerText = person.films.length;
    row.append(name, height, mass, gender, year, homeworld, films);
    return row;
}

function shipTable(ship) {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let model = document.createElement('td');
    let manufacturer = document.createElement('td');
    name.innerText = ship.name;
    model.innerText = ship.model;
    manufacturer.innerText = ship.manufacturer;
    row.append(name, model, manufacturer);
    row.addEventListener('click', function () {
        details.innerHTML = '';
        details.append(generateDetails(ship));

    })
    return row;
}

function generateDetails(object) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('details_wrapper')
    for (const key in object) {
        let value = object[key];
        let small = document.createElement('small');
        console.log(small)
        small.innerText = `${translation[key]}: `;
        if (typeof value === 'object') {
            let list = document.createElement('ul');
            list.append(small);
            value.forEach(item => {
                let li = document.createElement('li');
                li.innerText = item;
                list.append(li);
            })
            wrapper.append(list)
        } else {
            let p = document.createElement('p');
            p.append(small);
            p.innerHTML += value;
            wrapper.append(p);
        }
    }
    return wrapper;
}

function toggleSections() {
    startSection.toggleAttribute('hidden');
    tableSection.toggleAttribute('hidden');
}

function resetTable() {
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    details.innerHTML = '';
}

backBtn.addEventListener('click', function () {
    toggleSections();
    resetTable();
});

personBtn.addEventListener('click', function () {
    toggleSections();
    memory.context = memory.contextTypes.people;
    generateTable(memory.people, memory.peopleTableArr, memory.context);
})

shipBtn.addEventListener('click', function () {
    toggleSections();
    memory.context = memory.contextTypes.ships;
    generateTable(memory.ships, memory.shipTableArr, memory.context);
})

nextBtn.addEventListener('click', function () {
    if (memory.collection.next) {
        resetTable();
        if (memory.context === memory.contextTypes.people) {
            generateTable(memory.collection.next, memory.peopleTableArr, memory.context);
        } else if (memory.context === memory.contextTypes.ships) {
            generateTable(memory.collection.next, memory.shipTableArr, memory.context);
        }
    }
})

previousBtn.addEventListener('click', function () {
    if (memory.collection.previous) {
        resetTable();
        if (memory.context === memory.contextTypes.people) {
            generateTable(memory.collection.previous, memory.peopleTableArr, memory.context);
        } else if (memory.context === memory.contextTypes.ships) {
            generateTable(memory.collection.previous, memory.shipTableArr, memory.context);
        }
    }
})
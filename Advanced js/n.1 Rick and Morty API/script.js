let element = document.querySelector('#feed');
let btn = document.querySelector('#load');
let prev = document.querySelector('#previous');
let next = document.querySelector('#next');
let episodeInfo = document.querySelector('#episodeInfo');
let dataUrl = 'https://rickandmortyapi.com/api/episode';
let content;
let currentDetails;

async function fetchData(url) {
    let call = await fetch(url);
    let dataJson = await call.json();
    return dataJson;
}

btn.addEventListener('click', function () {
    fetchData(dataUrl)
        .then(data => {
            content = data;
            element.innerHTML = '';
            content.results.forEach(episode => {
                element.append(generateContent(episode));
            });
        })
})

next.addEventListener('click', function () {
    fetchData(content.info.next)
        .then(data => {
            content = data;
            element.innerHTML = '';
            content.results.forEach(episode => {
                element.append(generateContent(episode));
            });
        }).catch(function () {
            console.log('there is no next page');
        });
})

prev.addEventListener('click', function () {
    fetchData(content.info.prev)
        .then(data => {
            content = data;
            element.innerHTML = '';
            content.results.forEach(episode => {
                element.append(generateContent(episode));
            });
        }).catch(function () {
            console.log('there is no previous page');
        });
})

function generateContent(episode) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let name = document.createElement('td');
    let airDate = document.createElement('td');
    let url = document.createElement('td');
    let episodeDetails = document.createElement('td');
    let details = document.createElement('button');

    id.innerText = episode.id;
    name.innerText = episode.name;
    airDate.innerText = episode.air_date;
    url.innerText = episode.url;
    episodeDetails.innerText = episode.episode;
    details.innerText = 'Details';
    details.setAttribute('value', episode.id);

    details.addEventListener('click', function () {
        let selectedId = this.getAttribute('value');
        currentDetails = content.results.filter(function (result) {
            if (result.id == selectedId) {
                return result;
            };
        });
        generateDetails(currentDetails[0]);
    })
    row.append(id, name, airDate, url, episodeDetails, details);
    return row;
}

function generateDetails(episode) {
    episodeInfo.innerHTML = '';
    let id = document.createElement('p');
    let name = document.createElement('h2');
    let airDate = document.createElement('p');
    let url = document.createElement('p');
    let episodeDetails = document.createElement('p');
    let characters = document.createElement('ul');

    id.innerText = episode.id;
    name.innerText = episode.name;
    airDate.innerText = episode.air_date;
    url.innerText = episode.url;
    episodeDetails.innerText = episode.episode;

    episode.characters.forEach(character => {
        let charImg = character.split('/');
        charImg = `https://rickandmortyapi.com/api/character/avatar/${charImg[charImg.length - 1]}.jpeg`;
        let avatarWrapper = document.createElement('li');
        let avatar = document.createElement('img');
        avatar.setAttribute('src', charImg);
        avatarWrapper.append(avatar);
        characters.append(avatarWrapper);
    })

    episodeInfo.append(id, name, airDate, url, episodeDetails, characters);
}

function showDetails() {
    console.log(this)
}
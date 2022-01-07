const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelector('.navigation').children;
const resetBtn = document.querySelector('.resetBtn');

function stickyNav() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
}

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


window.addEventListener('scroll', function () {
    stickyNav();
});

menuToggle.addEventListener('click', function () {
    toggleMenu();
});

resetBtn.addEventListener('click', function () {
    initMap();
});

for (let link of navLinks) {
    link.addEventListener('click', function () {
        toggleMenu();
    });
}

//Google Maps API

function initMap() {
    let options = {
        zoom: 9,
        center: { lat: 35.2401, lng: 24.8093 }
    }
    const map = new google.maps.Map(document.querySelector('#map'), options);
}






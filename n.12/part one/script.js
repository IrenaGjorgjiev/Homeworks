let title = document.querySelector('#myTitle');
let secondTitle = document.getElementsByTagName('h1')[1];
let h3 = document.querySelector('h3');
let paragraphs = document.querySelectorAll('p');

function changeHtml() {
    title.innerText = 'The "enjoy while its easy" exercise';
    secondTitle.innerText = 'Where is the catch?';
    h3.innerText = 'And last, but not least.. you get a makeover too!';
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = 'You need to change';
    }
}

changeHtml();
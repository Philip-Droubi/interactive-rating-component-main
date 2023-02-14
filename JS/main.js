let ratingScreen = document.querySelector('main');
let thanksScreen = document.querySelector('.thanks');
let rateNum = localStorage.getItem('rate');
let rateChossen = document.querySelectorAll('li');
let submit = document.querySelector('.submit');
let reset = document.querySelector('.reset');
let thanksRate = document.querySelector('.my-rate')

function showRating() {
    ratingScreen.classList.remove('hidden');
    thanksScreen.classList.add('hidden');
}

function showthanks(rate) {
    ratingScreen.classList.add('hidden');
    thanksScreen.classList.remove('hidden');
    document.querySelector('.my-rate').textContent = rate;
}

if (rateNum != null) showthanks(localStorage.getItem('rate'));

rateChossen.forEach(e => {
    e.onclick = () => {
        rateChossen.forEach(e => {
            e.classList.remove('selected');
        });
        e.classList.add('selected');
    }
});

submit.addEventListener('click', () => {
    let rate = document.querySelector('.selected');
    if (rate)
        rate = rate.dataset.num;
    if (rate != null && (rate <= 5 || rate >= 5)) {
        localStorage.setItem('rate', rate);
        showthanks(rate);
    }
});

reset.addEventListener('click', () => {
    let rate = localStorage.getItem('rate');
    if (rate != null && (rate <= 5 || rate >= 5)) {
        document.querySelector(`li[data-num = "${rate}"]`).classList.add('selected');
    }
    showRating();
});
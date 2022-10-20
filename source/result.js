const rateUSButton = document.getElementById('btn');
const params = (new URL(window.location.href)).searchParams.get('data');
const data = JSON.parse(params);

rateUSButton.addEventListener('click', () => {
    location.href = 'review.html'
})

const numb = document.querySelector(".numb");
numb.textContent = 100;

let counter = 0;
setInterval(() => {
    if (counter == 100) {
        clearInterval();
    } else {
        counter += 1;
        numb.textContent = 100;
    }
}, 80);

window.onload = () => {
    console.log('data:', data);
}
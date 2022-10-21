const rateUSButton = document.getElementById('btn');
const correctPercentage = document.getElementById('correct-per');
const correctAnswers = document.getElementById('correct-answers');
const wrongPercentage = document.getElementById('wrong-per');
const wrongAnswers = document.getElementById('wrong-answers');
const params = (new URL(window.location.href)).searchParams.get('data');
const data = JSON.parse(params);

const showResults = () => {
    correctAnswers.innerText = `${data?.correctAnswers}/${data?.totalQuestions} questions`;
    wrongAnswers.innerText = `${data?.inCorrectAnswers}/${data?.totalQuestions} questions`;
    correctPercentage.innerText = `${(data?.correctAnswers / data?.totalQuestions) * 100}%`;
    wrongPercentage.innerText = `${(data?.inCorrectAnswers / data?.totalQuestions) * 100}%`;
}

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
    showResults();
}
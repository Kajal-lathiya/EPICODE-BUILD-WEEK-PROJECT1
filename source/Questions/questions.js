const quizData = [{
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "When Gmail first launched, how much storage did it provide for your email?",
    "correct_answer": "1GB",
    "incorrect_answers": ["512MB", "5GB", "1GB", "Unlimited"]
}, {
    "category": "Science: Computers",
    "type": "boolean", "difficulty": "easy",
    "question": "&quot;HTML&quot; stands for Hypertext Markup Language.",
    "correct_answer": "True",
    "incorrect_answers": ["False", "True"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
    "correct_answer": "Motherboard",
    "incorrect_answers": ["Central Processing Unit", "Motherboard", "Hard Disk Drive", "Random Access Memory"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    "correct_answer": "HD Graphics 500",
    "incorrect_answers": ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 500", "HD Graphics 7000"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "On Twitter, what was the original character limit for a Tweet?",
    "correct_answer": "140",
    "incorrect_answers": ["140", "120", "160", "100",]
}]
const h1 = document.getElementById('question');
let questionNumber = 0;
let score = 0;
let incorrectAnswers = 0;
// Start with an initial value of 60 seconds
const TIME_LIMIT = 60;
// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const FULL_DASH_ARRAY = 283;
const COLOR_CODES = {
    info: {
        color: "green"
    }
};
let remainingPathColor = COLOR_CODES.info.color;
const loadQuiz = () => {
    const currentQuestion = quizData[questionNumber];
    h1.innerText = currentQuestion.question;
    let btnNode = document.getElementById('option-btns');
    let buttonElements = document.querySelectorAll("#option-btns button");
    if (buttonElements) {
        for (let i = 0; (button = buttonElements[i]); i++) {
            button.parentNode.removeChild(button);
        }
    }
    for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
        let optionBtn = document.createElement('button');
        optionBtn.innerText = currentQuestion.incorrect_answers[i];
        optionBtn.id = 'op' + i;
        optionBtn.className = 'option-column';
        optionBtn.onclick = () => onSubmitButton(currentQuestion.incorrect_answers[i]);
        btnNode.appendChild(optionBtn)
    }
    const h3 = document.getElementById('question-no');
    h3.innerHTML = `QUESTION ${questionNumber + 1} <span>/ ${quizData.length}</span>`
}
const goToNextQuestion = () => {
    if (questionNumber < quizData.length) {
        loadQuiz();
    } else {
        const result = {
            "totalQuestions": quizData.length,
            "correctAnswers": score,
            "inCorrectAnswers": incorrectAnswers
        }
        let res = JSON.stringify(result);
        window.location.href = `../results.html?data=${res}`;


    }
}
const onSubmitButton = (answer) => {
    if (answer) {
        if (answer === quizData[questionNumber].correct_answer) {
            score++;
        } else {
            incorrectAnswers++;
        }
        timePassed = 0;
        timeLeft = TIME_LIMIT;
        questionNumber++;
        goToNextQuestion();
    }
}
function formatTime(time) {
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return seconds;
}
// Divides time left by the defined time limit.
function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
}
// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}
function startTimer() {
    timerInterval = setInterval(() => {
        // The amount of time passed increments by one
        if (timePassed !== 60) {
            console.log('timePassed:', timePassed);
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
        } else if (timePassed === 60) {
            timePassed = 0;
            timeLeft = TIME_LIMIT;
            questionNumber++;
            goToNextQuestion();
        }
        // The time left label is updated
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
    }, 1000);
}
function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;
    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
const loadTimer = () => {
    document.getElementById("timer").innerHTML = `
    <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
      </g>
    </svg>
    <div class="base-timer__content">
    <span class="label-timer">SECONDS</span>
    <span id="base-timer-label" class="base-timer__label">
    ${formatTime(timeLeft)}
    </span>
    <span class="label-timer">REMAINING</span>
    </div>
  </div>
    `;
}
window.onload = () => {
    loadQuiz();
    loadTimer();
    startTimer();
}
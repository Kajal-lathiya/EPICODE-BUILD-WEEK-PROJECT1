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

const startTimer = (duration, display) => {
    let timer = duration, seconds;
    setInterval(() => {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // display.textContent   = seconds;
        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}

const onSubmitButton = (index, answer) => {
    console.log('index:', index);
    if (answer) {
        if (answer === quizData[questionNumber].correct_answer) {
            score++;
        }
        questionNumber++;
        if (questionNumber < quizData.length) {
            loadQuiz();
        } else {
            const quizNode = document.getElementById('main');
            let percentage = (100 * score) / quizData.length;
            quizNode.style.textAlign = 'center';
            quizNode.style.paddingTop = '20px';
            quizNode.innerHTML = `<h1>Results</h1>
            <h3>Quiz completed successfully</h3>
            <h3>Score</h3>
            <h1>${percentage}%</h1>
            <h5>${score}/${quizData.length} questions</h5>
            <button onclick="location.reload()">Realod</button>
            `
        }
    }
}

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
        optionBtn.onclick = () => onSubmitButton(i, currentQuestion.incorrect_answers[i]);
        btnNode.appendChild(optionBtn)
    }
}
window.onload = () => {
    let minutes = 60, display = document.getElementById('time');
    startTimer(minutes, display);
    loadQuiz();
}
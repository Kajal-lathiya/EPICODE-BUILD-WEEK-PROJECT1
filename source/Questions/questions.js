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
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}
const loadQuiz = () => {
    const currentQuestion = quizData[questionNumber];
    h1.innerText = currentQuestion.question;

}
window.onload = () => {
    let minutes = 60, display = document.getElementById('time');
    startTimer(minutes, display);
    loadQuiz();
}
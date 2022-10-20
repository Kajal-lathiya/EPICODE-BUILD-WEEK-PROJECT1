
const proceedButton = document.getElementById('proceed-btn');
const checkboxNode = document.getElementById("checkbox");

const buttonCheck = () => {
  if (checkboxNode.checked) {
    proceedButton.disabled = false;
  } else {
    proceedButton.disabled = true;
  }
}

checkboxNode.addEventListener("change", (event) => {
  console.log(event.target.checked);
  proceedButton.disabled = !event.target.checked;
});

proceedButton.addEventListener('click', () => {
  location.href = './Questions/questions.html'
})

window.onload = () => {
  buttonCheck();
}
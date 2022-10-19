function buttonCheck() {
  let checkB = document.getElementById("checkbox");
  let proceedButton = document.getElementsByClassName("proceed");
  if (checkB.checked === true) {
    proceedButton.disabled = false;
  } else {
    proceedButton.disabled = true;
  }
  checkB.addEventListener("change", (event) => {
    proceedButton.disabled = !event.target.checked;
  });
}

window.onload(buttonCheck());

const circleContainer = document.getElementById("circlebox2");
const circleDiv = document.createElement("div");
circleContainer.append(circleDiv);

function changeStyle() {
  const styles = document.getElementsByName(circleDiv);
  styles.style.width = "10vh";
  styles.style.height = "10vh";
  styles.style.borderWidth = "1vh";
  styles.style.borderColor = "#00FFFF";
}

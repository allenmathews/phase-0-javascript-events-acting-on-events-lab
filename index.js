// Your code here
const dodger = document.getElementById("dodger")

dodger.style.backgroundColor = '#FF69B4'

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); //remember, the dodger styles left, right, etc are in relation to the parent object that it is placed within. 
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}
const dodger = document.getElementById("dodger")

dodger.style.backgroundColor = '#FF69B4'

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); //remember, the dodger styles left, right, etc are in relation to the parent object that it is placed within. 
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

function moveDodgerBottom() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

//this function - moveDodgerBottom() makes the dodger go up instead of going down

function moveDodgerTop() {
    const topNumbers = dodger.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
    if (top < 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}

//this function moveDodgerTop doesn't seem to be working


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    } else if (event.key === "ArrowUp") {
        moveDodgerTop();
    } else if (event.key === "ArrowDown") {
        moveDodgerBottom();
    }
});
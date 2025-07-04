

let number = 0;
const showcount = document.querySelector("#counter-display");
const increaseBtn = document.querySelector("#increment-btn");
const decreaseBtn = document.querySelector("#decrement-btn");
const resetBtn = document.querySelector("#reset-btn");

function updatecounter(){

    showcount.textContent = number;
}

function increase() {
  number++;
  updatecounter();
}

function decrease() {
     number--;
     updatecounter();
}

function reset() {
     number = 0;
     updatecounter();
}

decreaseBtn.addEventListener('click',decrease);

increaseBtn.addEventListener('click',increase);

resetBtn.addEventListener('click',reset);

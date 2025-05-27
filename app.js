const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const customTip = document.querySelector(".custom-tip");
const errorMessage = document.querySelector(".error-message");
const displayTipAmount = document.querySelector(".tip-amount");
const displayTotalAmount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset-button");

let billAmount = 0;
let tipPercent = 0;
let numberofPeople = 1;
let currentActiveTipBtn = null;

billInput.addEventListener("input", () => {
  billAmount = Number(billInput.value);
  tipCalculator();
});

peopleInput.addEventListener("input", () => {
  numberofPeople = Number(peopleInput.value);
  tipCalculator();
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    tipPercent = Number(btn.value);

    customTip.value = " ";
    tipCalculator();

    activeTipBtn(btn);
  });
});

customTip.addEventListener("input", () => {
  tipPercent = Number(customTip.value);

  removeActiveBtn();
  tipCalculator();
});

function tipCalculator() {
  if (numberofPeople === 0) {
    errorMessage.classList.add("error-text");
    peopleInput.classList.add("error");

    return;
  } else {
    errorMessage.classList.remove("error-text");
    peopleInput.classList.remove("error");
  }

  let tip = (billAmount * (tipPercent / 100)) / numberofPeople;
  let total = (billAmount + tip) / numberofPeople;

  displayTipAmount.textContent = tip.toFixed(2);
  displayTotalAmount.textContent = total.toFixed(2);
}

resetBtn.addEventListener("click", () => {
  reset();
});

function reset() {
  billInput.value = " ";
  peopleInput.value = " ";
  customTip.value = " ";
  displayTipAmount.textContent = "0.00";
  displayTotalAmount.textContent = "0.00";
  removeActiveBtn();
}

function activeTipBtn(newActiveTipBtn) {
  if (currentActiveTipBtn) {
    currentActiveTipBtn.classList.remove("active-tip-btn");
  }

  newActiveTipBtn.classList.add("active-tip-btn");

  currentActiveTipBtn = newActiveTipBtn;
}

function removeActiveBtn() {
  tipBtns.forEach((btn) => {
    btn.classList.remove("active-tip-btn");
  });
}

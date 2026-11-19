// 1. DOM ELEMENTS
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent");
const foodInput = document.getElementById("food");
const transportInput = document.getElementById("transport");
const otherInput = document.getElementById("other");
const calculateBtn = document.getElementById("calculate-btn");
const messageEl = document.getElementById("message");
const totalExpensesEl = document.getElementById("total-expenses");
const remainingBalanceEl = document.getElementById("remaining-balance");
const statusEl = document.getElementById("status");

// 2. LOGIC FUNCTIONS
function calculateTotal(rent, food, transport, other) {
  return rent + food + transport + other;
}

function calculateBalance(income, total) {
  return income - total;
}

function getStatus(balance) {
  if (balance > 0) {
    return "Within budget";
  } else if (balance === 0) {
    return "Budget fully used";
  } else {
    return "Over budget";
  }
}

// 3. HELPER FUNCTIONS
function isInvalid(text) {
  return text.trim() === "" || Number.isNaN(Number(text)) || Number(text) < 0;
}

function readAmount(inputElement) {
  const text = inputElement.value;
  if (isInvalid(text)) {
    return NaN;
  }
  return Number(text);
}

// 4. MAIN HANDLER
function handleCalculate() {
  const income = readAmount(incomeInput);
  const rent = readAmount(rentInput);
  const food = readAmount(foodInput);
  const transport = readAmount(transportInput);
  const other = readAmount(otherInput);

  if (
    Number.isNaN(income) ||
    Number.isNaN(rent) ||
    Number.isNaN(food) ||
    Number.isNaN(transport) ||
    Number.isNaN(other)
  ) {
    messageEl.textContent = "Please enter valid numbers in all fields.";
    totalExpensesEl.textContent = "-";
    remainingBalanceEl.textContent = "-";
    statusEl.textContent = "-";
    statusEl.classList.remove("within", "exact", "over");
    return;
  }

  messageEl.textContent = "";

  const totalExpenses = calculateTotal(rent, food, transport, other);
  const remainingBalance = calculateBalance(income, totalExpenses);
  const statusText = getStatus(remainingBalance);

  totalExpensesEl.textContent = totalExpenses;
  remainingBalanceEl.textContent = remainingBalance;
  statusEl.textContent = statusText;

  statusEl.classList.remove("within", "exact", "over");

  if (statusText === "Within budget") {
    statusEl.classList.add("within");
  } else if (statusText === "Budget fully used") {
    statusEl.classList.add("exact");
  } else {
    statusEl.classList.add("over");
  }
}

// 5. EVENT LISTENER
calculateBtn.addEventListener("click", handleCalculate);
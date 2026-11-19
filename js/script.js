
const incomeInput= document.getElementById("income");
const rentInput= document.getElementById("rent");
const transportInput= document.getElementById("transport");
const foodInput= document.getElementById("food");
const otherInput= document.getElementById("other");
const calculate_btnInput= document.getElementById("calculate-btn");
const messageInput= document.getElementById("message");
const total_Expensesnput= document.getElementById("total-expenses");
const remaining_balanceInput= document.getElementById("remaining-balance");
const statusInput= document.getElementById("status");
//functions
function isInvalid(value){
  return value.trim() === "" || Number.isNaN(Number(value)) || Number(value) < 0;
}
function calculateTotal(rent, food, transport, other){
    return rent+food+transport+other;
}
function calculateBalance (income, total){
    return income-total;
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
function readAmount() {
  const income1 = incomeInput.value;
  const rent1 = rentInput.value;
  const food1 = foodInput.value;
  const transport1 = transportInput.value;
  const other1 = otherInput.value;
}

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
  } else if (statusText === "Over budget") {
    statusEl.classList.add("over");
  }
}
//Validation
if(
  isInvalid(income1) ||
  isInvalid(rent1) ||
  isInvalid(food1) ||
  isInvalid(transport1) ||
  isInvalid(other1)
)

{
console.log("please enter a valid number for all fields")
}else{

const income= Number(income1);
const rent=Number(rent1);
const food=Number(food1);
const transport=Number(transport1);
const other=Number(other1);

const total=calculateTotal(rent, food, transport, other);
const balance=calculateBalance(income, total);
const status=getStatus(balance);

}
// 5. EVENT LISTENER
calculateBtn.addEventListener("click", handleCalculate);








const income1="5000";
const rent1="1500";
const food1="1200";
const transport1="400";
const other1="300";

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

const total=calculateTotal();
const balance=calculateBalance(monthlyIncome, total);
const status=getStatus(balance);

console.log(`Total Expense is = ${total}`);
console.log(`Remaining Balance = ${balance}`);
console.log(`Status= ${status}`);
}









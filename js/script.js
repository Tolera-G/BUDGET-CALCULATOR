const income1="5000";
const rent1="800";
const food1="400";
const transport1="600";
const other1="100";

//Validation
if (
income1.trim() === "" || Number.isNaN(Number(income1)) ||
rent1.trim()  === "" || Number.isNaN(Number(rent1))||
food1.trim() === "" || Number.isNaN(Number(food1)) ||
transport1.trim()  === "" || Number.isNaN(Number(transport1))||
income1.trim() === "" || Number.isNaN(Number(income1)) ||
other1.trim()  === "" || Number.isNaN(Number(other1))||
){
console.log("please enter a valid number for all fields")
}else{

const montlyIncome= Number(income1);
const rent=Number(rent1);
const food=Number(food1);
const transport=Number(transport1);
const other=Number(other1);

const totalExpense=rent+food+transport+other;
const remainingBalance = montlyIncome-totalExpense;

console.log(`Total expenses = ${totalExpense} (${typeof totalExpense})`);
console.log(`Remaining balance = ${remainingBalance} (${typeof remainingBalance})`);
}
//Status
let status= "";
if (remainingBalance>0) {
    status=`Withing budget ${remainingBalance} left`;    
}else if (remainingBalance===0) {
    status="Budget fully used (0 left)";
}esle {
    status="Over budget";
}

console.log(status);


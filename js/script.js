const income1="5000";
const rent1="1500";
const food1="1200";
const transport1="400";
const other1="300";

//Validation
if (
income1.trim() === "" || Number.isNaN(Number(income1)) ||Number(income1) < 0||
rent1.trim()  === "" || Number.isNaN(Number(rent1))||Number(rent1) < 0||
food1.trim() === "" || Number.isNaN(Number(food1)) ||Number(food1) < 0||
transport1.trim() === "" || Number.isNaN(Number(transport1))||Number(transport1) < 0||
income1.trim() === "" || Number.isNaN(Number(income1)) ||Number(income1) < 0||
other1.trim()  === "" || Number.isNaN(Number(other1))||Number(other1) < 0
)

{
console.log("please enter a valid number for all fields")
}else{

const monthlyIncome= Number(income1);
const rent=Number(rent1);
const food=Number(food1);
const transport=Number(transport1);
const other=Number(other1);
}

//Day-5
function calculateTotal(rent, food, transport, other){
    return rent+food+transport+other;
}
function calculateBalance (monthlyIncome, total){
    return monthlyIncome-total;
}
function getStatus(balance){
    let status="";
    if (balance>0){
        status="within budget";
         return status
    } else if (balance===0) {
        status="Budget fully used";
         return status
        
    } else {
        status="Over budget";
         return status
        
    }
}
const total=calculateTotal(300, 400, 500, 600);
const balance=calculateBalance(5000, total);
const status=getStatus(balance);
console.log(`Total Expense is = ${total}`);
console.log(`Remaining Balance = ${balance}`);
console.log(`Status= ${status}`);




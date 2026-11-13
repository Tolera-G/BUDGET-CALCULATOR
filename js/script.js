console.log("My first JavaScript code!");
console.log("Daily food cost=",200+300);
const monthlyIncome = 5000; // const used for monthlyIncome is always the same
const rent = 800;// we used const for the rent value can't e changed
let food = 300;
let transport = 200;
let other = 500;
let totalExpense=0;
let remainigBalance=0;
/* Remainig balance is equal with montly income minus-rent */
console.log(`Remainig balance = ${monthlyIncome-rent}`);
console.log(`Total expense= ${rent+food+transport+other}`);
/*DAY-03
1.Store your sample values as strings (for example "5000"). Real input boxes give you text, and today simulates that.
2.Convert each one with Number().
3. Calculate totalExpenses (rent, food, transport, other) and remainingBalance.
4. Log both results and their types (use typeof).
5. Experiment: remove the conversion from one value and see what totalExpenses becomes. Write down what happened and why.
*/
food="400";
transport="600";
other="100";
rent="100";
Number(food);
Number(transport);
Number(other);



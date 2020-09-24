

var ExpenseArray = [];
var IncomeArray = [];
var total = 0;
var extra = 0;
var total1 = 0;
var extra1 = 0;
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function inith() {
  if (localStorage.AddExpense) {
      ExpenseArray = JSON.parse(localStorage.AddExpense);
      for (var i = 0; i < ExpenseArray.length; i++) {

          extra = parseInt(ExpenseArray[i].mmon1)
          total += extra;
      }

  }
  IncomeArray = JSON.parse(localStorage.AddIncome);
  for (var i = 0; i < IncomeArray.length; i++) {
      extra1 = parseInt(IncomeArray[i].mon1)
      total1 += extra1;
  }

 if (total1 > total) {
   var deff = total1 - total
   var less = document.createElement("p");
   var head = document.createElement("h2");
   var hrr =  document.createElement("hr");

   lesshead = "Good";
   lesstext = "you spent" + " " + deff + "$ less than you have.";
   head.append(lesshead)
   less.append(lesstext)

   document.getElementById("output1234").appendChild(head);
   document.getElementById("output1234").appendChild(less);
   document.getElementById("output1234").appendChild(hrr);
 }
 if (total > total1) {
   var deff = total - total1
   var less = document.createElement("p");
   var head = document.createElement("h2");
   var hrr =  document.createElement("hr");

   lesshead = "Not Good";
   lesstext = "you spent" + " " + deff + "$ more than you have.";
   head.append(lesshead)
   less.append(lesstext)

   document.getElementById("output1234").appendChild(head);
   document.getElementById("output1234").appendChild(less);
   document.getElementById("output1234").appendChild(hrr);

 }
 if (total == total1) {
   var less = document.createElement("p");
   var head = document.createElement("h2");
   var hrr =  document.createElement("hr");

   lesshead = "Control on spendings";
   lesstext = "you have spent equal amount of money you have";
   head.append(lesshead)
   less.append(lesstext)

   document.getElementById("output1234").appendChild(head);
   document.getElementById("output1234").appendChild(less);
   document.getElementById("output1234").appendChild(hrr);

 }
}
// add function will take the item from the text input and stores that values in a specific key named as ExpenseArray.

function addexp() {
    var mmon = document.getElementById("money1").value;
    var tty = document.getElementById("type1").value;
    var dda = document.getElementById("date1").value;
    var stuObj = {mmon1: mmon, tty1: tty, dda1: dda};
    ExpenseArray.push(stuObj);
    localStorage.AddExpense = JSON.stringify(ExpenseArray);

    prepareTableCell(mmon, tty, dda);

}
// following function will make a table and show all the value from the local storage in the rows.


var NameArray = [];
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

          extra = parseInt(ExpenseArray[i].mmon1);
          total += extra;
      }

  }
  IncomeArray = JSON.parse(localStorage.AddIncome);
  for (var i = 0; i < IncomeArray.length; i++) {
      extra1 = parseInt(IncomeArray[i].mon1);
      total1 += extra1;
  }
  document.getElementById("nresult").innerHTML = localStorage.getItem("nvalue");

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

 }
 var final = total1 - total;
 var finalfinal = "You have" + " " + final + "$ in your account"
 var hhh1 = document.createElement("h2");
 hhh1.append(finalfinal)
 localStorage.AddMilestone;
 document.getElementById("final1234").appendChild(hhh1);
 MilestoneArray = JSON.parse(localStorage.AddMilestone);
 const currentdate = new Date();

 for (var i = 0; i < MilestoneArray.length; i++) {
     milestonem = parseInt(MilestoneArray[i].mon1);
     milestoneend = new Date(MilestoneArray[i].da2);
     milestonet = MilestoneArray[i].ty1;
     diffmoney = milestonem - final
     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
     const diffDays = Math.round(Math.abs((milestoneend - currentdate) / oneDay));
     if (currentdate < milestoneend) {
       if (diffmoney < 0){
       var milsave = "you saved" + " " + milestonem + "$ for" + " " + milestonet }
       if (diffmoney = 0){
         var milsave = "you saved" + " " + milestonem + "$ for" + " " + milestonet }
         if (diffmoney > 0){
           var milsave = "you need to save" + " " + diffmoney + "$ for" + " " + milestonet + " " + "in" + " " + diffDays + " " + "Days" }

       var milh2 = document.createElement("h2");
       var hrr =  document.createElement("hr");
       milh2.append(milsave)

       document.getElementById("milans1234").appendChild(milh2);
       document.getElementById("milans1234").appendChild(hrr);
     }
     if (diffDays == 0){
       if (final >= milestonem){
         great = "Congratulations you have saved enough money for" + " " + milestonet ;
         var milh2 = document.createElement("h2");
         var hrr =  document.createElement("hr");
         milh2.append(great)
         document.getElementById("milans1234").appendChild(milh2);
         document.getElementById("milans1234").appendChild(hrr);
       }
       if (final < milestonem){
         lose = "Soory, you have not saved enough money for" + " " + milestonet ;
         var milh2 = document.createElement("h2");
         var hrr =  document.createElement("hr");
         milh2.append(lose)
         document.getElementById("milans1234").appendChild(milh2);
         document.getElementById("milans1234").appendChild(hrr);
       }
     }



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
function addname() {

    var name = document.getElementById("ls").value;
    localStorage.setItem("nvalue", name);

}

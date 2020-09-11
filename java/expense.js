function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var ExpenseArray = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init1() {
  if (localStorage.AddExpense) {
      ExpenseArray = JSON.parse(localStorage.AddExpense);
      for (var i = 0; i < ExpenseArray.length; i++) {
          prepareTableCell(ExpenseArray[i].mmon1, ExpenseArray[i].tty1, ExpenseArray[i].dda1)

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
function prepareTableCell(mmon, tty, dda) {
    var ddd = document.createElement("B");
    var uuuu = document.createElement("U")
    var nodee = document.createElement("p");
    var noder = document.createElement("p");
    var nodet = document.createElement("p");
    var nodey = document.createElement("p");
    var ea = document.createElement("p");
    var node = document.createElement("br");
    var nodehr = document.createElement("hr");
    var textnode = document.createTextNode("");
    var textnodehr = document.createTextNode("");
    var easy = document.createElement("a");
    var easy1 = document.createElement("a");
    var easy2 = document.createElement("a");
    var easy3 = document.createElement("a");
    var easy4 = document.createElement("hr");
    var buu = document.createElement("button");


    nodee.appendChild(easy);
    noder.appendChild(easy1);
    nodet.appendChild(easy2);
    nodey.appendChild(easy3);
    var textnode1 = mmon + "$";
    var textnode2 = "Money:" + mmon + "$";
    var textnode3 = "Type:" + tty;
    var textnode4 = "Date:" + dda;

    easy.append(textnode1);
    easy1.append(textnode2);
    easy2.append(textnode3);
    easy3.append(textnode4);
    nodehr.append(textnodehr);


    document.getElementById("output1").appendChild(ddd);
    document.getElementById("output1").appendChild(noder);
    document.getElementById("output1").appendChild(nodet);
    document.getElementById("output1").appendChild(nodey);
    document.getElementById("output1").appendChild(easy4);

}

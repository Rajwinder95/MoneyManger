function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var IncomeArray = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
  if (localStorage.AddIncome) {
      IncomeArray = JSON.parse(localStorage.AddIncome);
      for (var i = 0; i < IncomeArray.length; i++) {
          prepareTableCell(IncomeArray[i].mon1, IncomeArray[i].ty1, IncomeArray[i].da1)

      }
  }

}
// add function will take the item from the text input and stores that values in a specific key named as Day1Array.

function addinc() {
    var mon = document.getElementById("money1").value;
    var ty = document.getElementById("type1").value;
    var da = document.getElementById("date1").value;
    var stuObj = {mon1: mon, ty1: ty, da1: da};
    IncomeArray.push(stuObj);
    localStorage.AddIncome = JSON.stringify(IncomeArray);

    prepareTableCell(mon, ty, da);

}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(mon, ty, da) {
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
    var easy4 = document.createElement("a");
    var buu = document.createElement("button");


    nodee.appendChild(easy);
    noder.appendChild(easy1);
    nodet.appendChild(easy2);
    nodey.appendChild(easy3);
    ea.appendChild(easy4);
    ddd.appendChild(uuuu);
    uuuu.appendChild(nodee);
    easy4.appendChild(buu)
    var textnode1 = mon + "$";
    var textnode2 = "Money:" + mon + "$";
    var textnode3 = "Type:" + ty;
    var textnode4 = "Date:" + da;

    easy.append(textnode1);
    easy1.append(textnode2);
    easy2.append(textnode3);
    easy3.append(textnode4);
    nodehr.append(textnodehr);

    /*document.getElementById("output1").appendChild(nodee);*/
    document.getElementById("output1").appendChild(ddd);
    document.getElementById("output1").appendChild(noder);
    document.getElementById("output1").appendChild(nodet);
    document.getElementById("output1").appendChild(nodey);
    document.getElementById("output1").appendChild(node);
    document.getElementById("output1").appendChild(ea);

    /*document.getElementById("output1").appendChild(nodehr);*/

}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var MilestoneArray = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init2() {
  if (localStorage.AddMilestone) {
      MilestoneArray = JSON.parse(localStorage.AddMilestone);
      for (var i = 0; i < MilestoneArray.length; i++) {
          prepareTableCell(MilestoneArray[i].mon1, MilestoneArray[i].ty1, MilestoneArray[i].da1,  MilestoneArray[i].da2)

      }
  }
document.getElementById("nresult").innerHTML = localStorage.getItem("nvalue");
}
// add function will take the item from the text input and stores that values in a specific key named as IncomeArray.

function addmil() {
    var mon = document.getElementById("money1").value;
    var ty = document.getElementById("type1").value;
    var da = document.getElementById("date1").value;
    var da22 = document.getElementById("date2").value;
    var stuObj = {mon1: mon, ty1: ty, da1: da, da2: da22};
    MilestoneArray.push(stuObj);
    localStorage.AddMilestone = JSON.stringify(MilestoneArray);

    prepareTableCell(mon, ty, da, da22);

}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(mon, ty, da, da22) {
    var ddd = document.createElement("B");
    var uuuu = document.createElement("U")
    var nodee = document.createElement("p");
    var noder = document.createElement("p");
    var nodet = document.createElement("p");
    var nodey = document.createElement("p");
    var noded = document.createElement("p");
    var ea = document.createElement("p");
    var node = document.createElement("br");
    var nodehr = document.createElement("hr");
    var textnode = document.createTextNode("");
    var textnodehr = document.createTextNode("");
    var easy = document.createElement("a");
    var easy1 = document.createElement("a");
    var easy2 = document.createElement("a");
    var easy3 = document.createElement("a");
    var easy5 = document.createElement("a");
    var easy4 = document.createElement("hr");
    var buu = document.createElement("button");


    nodee.appendChild(easy);
    noder.appendChild(easy1);
    nodet.appendChild(easy2);
    nodey.appendChild(easy3);
    noded.appendChild(easy5);
    var textnode1 = mon + "$";
    var textnode2 = "Money:" + mon + "$";
    var textnode3 = "Type:" + ty;
    var textnode4 = "Start Date:" + da;
    var textnode5 = "Eend Date:" + da22;

    easy.append(textnode1);
    easy1.append(textnode2);
    easy2.append(textnode3);
    easy3.append(textnode4);
    easy5.append(textnode5);
    nodehr.append(textnodehr);

    document.getElementById("output1").appendChild(ddd);
    document.getElementById("output1").appendChild(noder);
    document.getElementById("output1").appendChild(nodet);
    document.getElementById("output1").appendChild(nodey);
    document.getElementById("output1").appendChild(noded);
    document.getElementById("output1").appendChild(easy4);

}

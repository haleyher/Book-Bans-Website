/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
var name = document.getElementById("name").value;
var bookName = document.getElementById("bookName").value;
var finishDate = document.getElementById("finishDate").value;

displayScript.innerHTML = "I, " + name + ", promise to read " + bookName + " by " + finishDate + ".";
  
}

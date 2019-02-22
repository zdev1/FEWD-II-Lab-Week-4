/*eslint-env browser*/

//window.addEventListener("load", init);
//function init () {
//var button = window.document.getElementById("myButton");
//button.addEventListener("click", displayMessage);
//function displayMessage(e) {
//    "use strict";
//    window.alert(e.target.innerHTML);
//}
//
//button.addEventListener("click", displayMessage);
//}
//    
    
window.addEventListener("load", init);
function init () {
    var buttons = window.document.getElementById("buttons");
    buttons.addEventListener("click", function (e) {
        window.alert(e.target.innerHTML);
    });
}

//button.addEventListener("click", function (){
//    "use strict";
//    window.alert("Hello World!");
//});
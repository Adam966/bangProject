$(document).ready(function(){



});


function modal(){
	
// Get the modal
let modalRules = document.getElementById('RulesModal');
let modalSettings = document.getElementById('SettingsModal');

// Get the button that opens the modal
let btnRules = document.getElementById("RulesButton");
let btnSettings = document.getElementById("SettingsButton");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];


// When the user clicks the button, open the modal
btnRules.onclick = function() {
    modalRules.style.display = "block";
}

btnSettings.onclick = function() {
    modalSettings.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modalRules.style.display = "none";
}

span2.onclick = function() {
    modalSettings.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalRules) {
        modalRules.style.display = "none";
    }
	
	if (event.target == modalSettings) {
        modalSettings.style.display = "none";
    }

}

document.getElementById("PlayButton").onclick = function () {
        location.href = "subpages/game.html";
    };
	
}




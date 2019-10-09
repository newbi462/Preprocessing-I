function showHideIntro() {
  var toggleIntro = document.getElementById("Intro");
  var toggleSkills = document.getElementById("Skills");
  var toggleWorkHistory = document.getElementById("WorkHistory");
  var toggleContact = document.getElementById("Contact");

  if (toggleIntro.style.display === "none") {
    toggleIntro.style.display = "block";
    toggleSkills.style.display = "none";
    toggleWorkHistory.style.display = "none";
    toggleContact.style.display = "none";
  }
  else {
    toggleIntro.style.display = "none";
  }
}

/*do I need to hid if shown and cliked? for this resume project?*/


/*
use this stack opver flow to make the IDs variables of this funtion
https://stackoverflow.com/questions/6242976/javascript-hide-show-element

*/

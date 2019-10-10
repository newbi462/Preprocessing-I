function showHideToggle(show, hide1, hide2, hide3) {
  var toggleShow = document.getElementById(show);
  var toggleHide1 = document.getElementById(hide1);
  var toggleHide2 = document.getElementById(hide2);
  var toggleHide3 = document.getElementById(hide3);

  var placeholder = document.getElementById("holder");

  /*need to fix logis so also works wen orde rof none not right*/
  toggleShow.style.display = "none";
  toggleHide1.style.display = "none";
  toggleHide2.style.display = "none";
  toggleHide3.style.display = "none";
  placeholder.style.display = "none";
  /*Why do I need to set these in JS and not CSS?*/

  if (toggleShow.style.display === "none") {
    toggleShow.style.display = "block";
    toggleHide1.style.display = "none";
    toggleHide2.style.display = "none";
    toggleHide3.style.display = "none";
  }
  else {
    toggleShow.style.display = "none";
  }
}

/*do I need to hid if shown and cliked? for this resume project?*/


/*
use this stack opver flow to make the IDs variables of this funtion
https://stackoverflow.com/questions/6242976/javascript-hide-show-element

*/

function showAll() {
  var toggleIntro = document.getElementById("Intro");
  var toggleSkills = document.getElementById("Skills");
  var toggleWorkHistory = document.getElementById("WorkHistory");
  var toggleContact = document.getElementById("Contact");
  var placeholder = document.getElementById("holder");

  toggleIntro.style.display = "block";
  toggleSkills.style.display = "block";
  toggleWorkHistory.style.display = "block";
  toggleContact.style.display = "block";
  placeholder.style.display = "none";

/*  if (toggleIntro.style.display === "none") {
    toggleIntro.style.display = "block";
    toggleSkills.style.display = "block";
    toggleWorkHistory.style.display = "block";
    toggleContact.style.display = "block";
  }
  else {
    toggleShow.style.display = "none";
  }*/
}


function hideMenu() {
  var toggleNav = document.getElementById("navbox");

//  toggleNav.style.display = "none";

  if (toggleNav.style.display === "none") {
    toggleNav.style.display = "flex";
  }
  else {
    toggleNav.style.display = "none";
  }
}

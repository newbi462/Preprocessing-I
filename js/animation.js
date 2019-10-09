function showHideToggle(show, hide1, hide2, hide3) {
  var toggleShow = document.getElementById(show);
  var toggleHide1 = document.getElementById(hide1);
  var toggleHide2 = document.getElementById(hide2);
  var toggleHide3 = document.getElementById(hide3);

  /*need to fix logis so also works wen orde rof none not right*/
  toggleShow.style.display = "none";
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

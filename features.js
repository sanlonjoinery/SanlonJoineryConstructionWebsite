window.addEventListener("resize", resized);

function openNav() {
  var nav = document.getElementsByTagName("nav")[0];
  nav.style.width = "40%";
}

function closeNav() {
  var nav = document.getElementsByTagName("nav")[0];
  nav.style.width = "0";
}

function resized() {
  //Prevents nav being wrong size when closed.
  var nav = document.getElementsByTagName("nav")[0];
  if (document.documentElement.clientWidth >= 725) {
    nav.style.width = "10%";
    document.location.reload(true);
  } else if (document.documentElement.clientWidth < 725) {
    nav.style.width = "0";
    document.location.reload(true);
  }
}

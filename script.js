window.onscroll = function() {headScroll()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function headScroll() {
  if (document.documentElement.scrollTop > sticky) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

window.onclick = function() {resumeWarn()};

function resumeWarn(){
  window.alert("Are you sure you wish to download this file?");
}
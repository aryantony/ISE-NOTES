let x = window.matchMedia("(min-width:0px) and (max-width:359px)");
myfun(x);
x.addListener(myfun);
function myfun(x) {
  if (x.matches) {
    document.querySelector(".ise_heading").innerHTML = "ISE";
  }
}

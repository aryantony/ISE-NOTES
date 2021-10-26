let select_submit_botton = document.querySelector("#submit");
let input_checkbox = document.getElementsByName("year");

select_submit_botton.addEventListener("click", (e) => {
  e.preventDefault();
  let x = 0;

  for (let i = 0; i < input_checkbox.length; i++) {
    if (input_checkbox[i].checked) {
      x++;
    }
  }
  if (x == 0) {
    document.querySelector(".submit_botton").style.marginTop = "33px";
    document.querySelector(".error").style.opacity = "1";
  } else {
    for (let i = 0; i < input_checkbox.length; i++) {
      if (input_checkbox[i].checked) {
        if (i == 0) {
          window.open("first_yr.html");
        } else if (i == 1) {
          window.open(
            "https://drive.google.com/drive/u/0/folders/1m_kSQPNGLNAWpCkw8hdGlZq_LVjfR3XW"
          );
        } else if (i == 2) {
          window.open(
            "https://drive.google.com/drive/u/0/folders/11bgs4NNuVB0mHvmfKXiq7l-4QPrN0OtY"
          );
        } else {
          window.open(
            "https://drive.google.com/drive/u/0/folders/1FGCO-8GUurZiXqFTeAlvIvu6gbifXX97"
          );
        }
        input_checkbox[i].checked = false;
        document.querySelector("#b").style.background = "none";
        document.querySelector("#c").style.background = "none";
        document.querySelector("#d").style.background = "none";
        document.querySelector("#a").style.background = "none";
        document.querySelector("#a").style.color = "rgb(134 143 59)";
        document.querySelector("#b").style.color = "rgb(134 143 59)";
        document.querySelector("#c").style.color = "rgb(134 143 59)";
        document.querySelector("#d").style.color = "rgb(134 143 59)";
        document.querySelector("#a").style.border =
          " 2px dashed rgb(206, 87, 8)";
        document.querySelector("#b").style.border =
          " 2px dashed rgb(206, 87, 8)";
        document.querySelector("#c").style.border =
          " 2px dashed rgb(206, 87, 8)";
        document.querySelector("#d").style.border =
          " 2px dashed rgb(206, 87, 8)";
      }
    }
  }
});
function A(o) {
  document.querySelector(".error").style.opacity = "0";
  document.querySelector(".submit_botton").style.marginTop = "10px";

  if (o == 1) {
    document.querySelector("#b").style.background = "none";
    document.querySelector("#c").style.background = "none";
    document.querySelector("#d").style.background = "none";
    document.querySelector("#a").style.background = "rgb(138 127 108)";
    document.querySelector("#a").style.color = "black";
    document.querySelector("#a").style.border = "2px solid";
    document.querySelector("#b").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#b").style.color = "rgb(134 143 59)";
    document.querySelector("#c").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#c").style.color = "rgb(134 143 59)";
    document.querySelector("#d").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#d").style.color = "rgb(134 143 59)";
  } else if (o == 2) {
    document.querySelector("#a").style.background = "none";
    document.querySelector("#c").style.background = "none";
    document.querySelector("#d").style.background = "none";
    document.querySelector("#b").style.background = "rgb(138 127 108)";
    document.querySelector("#b").style.color = "black";
    document.querySelector("#b").style.border = "2px solid";
    document.querySelector("#a").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#a").style.color = "rgb(134 143 59)";
    document.querySelector("#c").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#c").style.color = "rgb(134 143 59)";
    document.querySelector("#d").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#d").style.color = "rgb(134 143 59)";
  } else if (o == 3) {
    document.querySelector("#b").style.background = "none";
    document.querySelector("#a").style.background = "none";
    document.querySelector("#d").style.background = "none";
    document.querySelector("#c").style.background = "rgb(138 127 108)";
    document.querySelector("#c").style.color = "black";
    document.querySelector("#c").style.border = "2px solid";
    document.querySelector("#b").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#b").style.color = "rgb(134 143 59)";
    document.querySelector("#a").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#a").style.color = "rgb(134 143 59)";
    document.querySelector("#d").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#d").style.color = "rgb(134 143 59)";
  } else {
    document.querySelector("#b").style.background = "none";
    document.querySelector("#c").style.background = "none";
    document.querySelector("#a").style.background = "none";
    document.querySelector("#d").style.background = "rgb(138 127 108)";
    document.querySelector("#d").style.color = "black";
    document.querySelector("#d").style.border = "2px solid";
    document.querySelector("#b").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#b").style.color = "rgb(134 143 59)";
    document.querySelector("#c").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#c").style.color = "rgb(134 143 59)";
    document.querySelector("#a").style.border = " 2px dashed rgb(206, 87, 8)";
    document.querySelector("#a").style.color = "rgb(134 143 59)";
  }
}
let x = window.matchMedia("(min-width:0px) and (max-width:359px)");
myfun(x);
x.addListener(myfun);
function myfun(x) {
  if (x.matches) {
    document.querySelector(".ise_heading").innerHTML = "ISE";
  }
}
document.querySelector("#km").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("know.html");
});
document.querySelector("#click_mail").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("mailto:aryanroy3865@gmai.com");
});
document.querySelector("#click_visit").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://roy-com.github.io/Portfolio");
});

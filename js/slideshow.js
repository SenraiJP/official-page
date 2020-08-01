d.onscroll = function() {
  var y = window.pageYOffset;
  if (228 < y) {
    const header_get = d.getElementById("header");
    header_get.classList.add("bg_on");
    header_get.classList.remove("bg_off");
    checker = 1;
  } else if (y < 229) {
    const header_get = d.getElementById("header");
    if (checker == 1) {
      header_get.classList.add("bg_off");
    }
    header_get.classList.remove("bg_on");
  }
}
const sl_b_l = d.getElementById('slide_left_button');
const sl_b_r = d.getElementById('slide_right_button');
let sl_n = 0;
const sl_o = d.getElementsByClassName('slide_obj');
sl_b_r.addEventListener('click', slide_plus, false);
const sl_ss = "slide_show";
const sl_sn = "slide_none";
function slide_plus() {
  sl_o[sl_n].classList.remove(sl_ss);
  if (0 <= sl_n && sl_n <= 2) {
    sl_o[sl_n + 1].classList.remove(sl_sn);
    sl_o[sl_n].classList.remove(sl_ss);
    sl_o[sl_n + 1].classList.add(sl_ss);
    sl_o[sl_n].classList.add(sl_sn);
  } else if (sl_n == 3) {
    sl_o[3].classList.remove(sl_ss);
    sl_o[1].classList.remove(sl_ss);
    sl_o[0].classList.remove(sl_sn);
    sl_o[3].classList.add(sl_sn);
    sl_o[1].classList.add(sl_sn);
    sl_o[0].classList.add(sl_ss);
  }
  if (sl_n == 3) {
    sl_n = 0;
  } else if (sl_n <= 2) {
    sl_n++;
  }
  clearInterval(slideTimer);
  slideTimer = setInterval(slide_plus, 3000);
}
sl_b_l.addEventListener('click', function() {
  sl_o[sl_n].classList.add(sl_ss);
   if (sl_n == 0) {
    sl_o[3].classList.remove(sl_sn);
    sl_o[1].classList.remove(sl_ss);
    sl_o[0].classList.remove(sl_ss);
    sl_o[3].classList.add(sl_ss);
    sl_o[1].classList.add(sl_sn);
    sl_o[0].classList.add(sl_sn);
   } else if (1 <= sl_n && sl_n <= 3) {
    sl_o[sl_n - 1].classList.remove(sl_sn);
    sl_o[sl_n].classList.remove(sl_ss);
    sl_o[sl_n -1 ].classList.add(sl_ss);
    sl_o[sl_n].classList.add(sl_sn);
   }
  if (sl_n == 0) {
    sl_n = 3;
  } else if (sl_n <= 4) {
    sl_n--;
  }
  clearInterval(slideTimer);
  slideTimer = setInterval(slide_plus, 3000);
}, false);
var slideTimer = setInterval(slide_plus, 3000);
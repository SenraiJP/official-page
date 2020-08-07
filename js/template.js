var vh=window.innerHeight;
document.documentElement.style.setProperty('--height',vh/100+'px');
var checker = 0;
let d = document;
const s_b = d.getElementById("sidemenu");
const s_s = d.getElementById("sidemenu_wrap");
function show() {
  s_b.classList.toggle("close");
  s_s.classList.toggle("side_none");
  s_s.classList.toggle("side_show");
}
s_b.addEventListener("click", show);
$(function(){
  $("#sidemenu_wrap").load("/parts/ #sidemenu_lis");
  $("#footer").load("/parts/ #footer");
});

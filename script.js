



{
    let p = document.getElementById("demo");

b1.onclick = function () {
  p.setAttribute("style","color:blue; font-size:18px;");
};

b2.onclick = function () {
  p.style.cssText = "color:yellow ; font-size:30px;";
};

b3.onclick = function () {
  p.classList.toggle("red");
}
}
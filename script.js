// let elementNew = document.createElement('h1');

// elementNew.textContent= "hi this is heading";

// let mydiv2 = document.querySelector('#parent');

// mydiv2.insertAdjacentElement("beforeend", elementNew);

// document.getElementById("p").textContent = "hi dev";

// document.querySelector(".title").innerHTML = "<h3> hi hello </h3>";

// document.querySelector(".title").style.fontSize = "40px";

// document.querySelector(".title").style.color = "red";

// document.querySelector('#p').style.fontSize = "3rem";


// document.getElementById('child').innerHTML = " im the next one"




// {
//     document.querySelector(".desc1").innerHTML = "<h1>hi</h1>";
// }

// let newElem = document.createElement("h1");


// newElem.textContent = "hi this is js";


// let mydiv = document.querySelector(".child");

// mydiv.insertAdjacentElement("beforeend", newElem);

// newElem.remove();


// let newElem = document.getElementById("para"); 
// newElem.style.color = "black";
// newElem.style.backgroundColor = "red";
// newElem.style.padding = "50px 0";
// newElem.style.fontSize = "65px";

// document.getElementById("para2").style.cssText="color: black; background : red;";




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
};



}



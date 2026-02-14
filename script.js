

let heroDesc = document.createElement("p");

heroDesc.textContent = `Excepturi debitis saepe quia ex libero sunt provident 
maiores harum commodi eius natusdoloremqu`;



let myDiv = document.getElementById('content');

myDiv.insertAdjacentElement('afterbegin', heroDesc);



document.querySelector(".descript").classList.add('tagline');


document.getElementById("para").classList.add("desc");

document.querySelector("#cta").classList.add('btn');


let newDesc = document.createElement("h2");


newDesc.textContent = "hi this is the newDesc";
newDesc.classList.add('tagline');




let myDiv2 = document.querySelector("#child");


myDiv2.insertAdjacentElement('afterbegin', newDesc)







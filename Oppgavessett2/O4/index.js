const ypos = prompt("Insert Y-position");
const xpos = prompt("Insert X-position");

const yp = Number(ypos);
const xp = Number(xpos);

const Ein = document.querySelector("#ein");

ein.style.backgroundColor = "green";
ein.style.height = "50px";
ein.style.width = "50px";   
ein.style.left = `${yp}px`;
ein.style.top = `${xp}px`;
ein.style.position = "absolute";
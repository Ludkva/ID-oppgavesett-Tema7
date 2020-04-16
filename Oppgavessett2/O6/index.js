const Gdiv = document.querySelector("#Gdiv");

const inpY = document.querySelector("#inpY")
const inpX = document.querySelector("#inpX")
const inpBredde = document.querySelector("#inpB")
const inpHoyde = document.querySelector("#inpH")
const inpHjorne = document.querySelector("#inpHj")

Gdiv.style.backgroundColor = "green";
Gdiv.style.height = "20px";
Gdiv.style.width = "20px";
Gdiv.style.position = "absolute";

function flyttMeg() {

    const left = Number(inpX.value)
    const top = Number(inpY.value)

Gdiv.style.left = `${left}px`;
Gdiv.style.top = `${top}px`;

}

inpX.oninput = flyttMeg;
inpY.oninput = flyttMeg;


function skaler(){

    const bredde = Number(inpBredde.value);
    const hoyde = Number(inpHoyde.value);    

Gdiv.style.width = `${bredde}px`;
Gdiv.style.height = `${hoyde}px`;

}
inpBredde.oninput = skaler;
inpHoyde.oninput = skaler;

function avrunding() {

    const avrunding = Number(inpHjorne.value)
    Gdiv.style.borderRadius = `${avrunding}%`

}

inpHjorne.oninput = avrunding;
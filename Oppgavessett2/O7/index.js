    const tf = document.getElementById("#TF");
const bg = document.getElementById("#BG");
const font = document.getElementById("#Font");
const scale = document.getElementById("#Size");

function storrelse() {

    const strl = Number(Size.value);
    myP.style.fontSize = `${strl}px`;

}
Size.oninput = storrelse;


function farge() {

    const form = document.getElementById("TF");
    myP.style.color = `${form.value}`;
    myP.style.transition = "1s";
}
TF.oninput = farge;

function bgfarge() {

    const bgc = document.getElementById("BG");
    document.body.style.backgroundColor = `${bgc.value}`;
    document.body.style.transition = "1s";
}
BG.oninput = bgfarge;

function problembarn1() {
    
    const myP =  document.getElementById("myP");
    const radioButtons = document.getElementsByName("fasong");
    const checkedRadioButtons = Array.from(radioButtons).filter( f => f.checked == true);


const value = checkedRadioButtons[0].value;
if(value === "regular"){
    myP.style.fontStyle = "";
    myP.style.fontWeight = "";

}
if(value === "italic"){
    myP.style.fontStyle = "italic";
    myP.style.fontWeight = "";
}
if(value === "bold"){
    myP.style.fontStyle = "";
    myP.style.fontWeight = "bold";


}
}

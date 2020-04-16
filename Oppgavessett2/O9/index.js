const inpHead = document.querySelector("#inpHead")
const inpBURL = document.querySelector("#inpBURL")
const knappen = document.querySelector("#knappen")
const artikkler = document.querySelector("#artikkler")



function make(){
    artikkler.innerHTML +=
        `<article>
            <h2>${inpHead.value}</h2>
            <img src="${inpBURL.value}"
        </article>`
        

}
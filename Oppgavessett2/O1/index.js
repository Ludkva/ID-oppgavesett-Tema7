const fornavn = prompt("hva er ditt fornavn?");

const etternavn = prompt("hva er ditt etternavn?");

const navn = (fornavn + " " + etternavn);


function skriv(navn){
    document.write(`<p>${navn}</p>`)
}

skriv(navn);
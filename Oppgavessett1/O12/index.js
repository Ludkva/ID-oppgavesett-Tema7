const fornamn = prompt("Hva er ditt fornavn?")

const etternamn = prompt("Hva er ditt etternavn?")

const stilling = prompt("Hva er stillingen din?")

const bilde = prompt("Lim in bildeurl av deg selv her")

document.write(fornamn + " " + etternamn)

document.write(`
<p>
<strong> 

Stilling: ${stilling}

</strong>
</p>

`)

document.write(`

<img src="${bilde}" style="width: 300px">

`)
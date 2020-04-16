let pum = prompt("Skriv in pris uten moms");

const sum = pum * 1.25;

let m = sum / 5;

document.write(`<ul>`)
document.write(`<li>`)
document.write(Number(pum) + " kroner uten moms");
document.write(`</li>`)
document.write(`<li>`)
document.write(sum + "  kroner inkl. moms");
document.write(`</li>`)
document.write(`<li>`)
document.write(m + " kroner moms")
document.write(`</li>`)
document.write(`</ul>`)
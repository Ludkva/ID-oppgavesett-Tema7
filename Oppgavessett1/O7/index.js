const bc = prompt(`Enter image URL here`)


const title = prompt(`What title do you want?`)

const size = prompt(`What size of the picture do you want?`)



document.write(`
<h1>
${title}
</h1>
`)


document.write(`

<body>
<img src="${bc}"width="${size}">
</body>

`)
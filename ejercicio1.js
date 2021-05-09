const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

name.question('inserta un color que te guste:', color =>{
    console.log(`Te gusta el color ${color}`)
    name.close()
})
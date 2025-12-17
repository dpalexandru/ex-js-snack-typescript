// dato sconosciuto inizialmente Snack1

let dato: unknown;

dato = [1,2,3];


// se è una stringa stampo in maiuscolo
if (typeof dato === 'string') {
  console.log(dato.toLocaleUpperCase())
} else if (typeof dato === 'number'){
console.log(dato * 2)
} else if(typeof dato === 'boolean'){
  console.log(dato? "si ": "no")
} else if(dato === null){
 console.log("Il dato è vuoto")
} else if(Array.isArray(dato )) {
console.log(dato.length)
} else if (dato instanceof Promise) {
dato.then( msg => console.log(msg))
} else {
  console.log("Dato non supportato")
}






// dato sconosciuto inizialmente Snack1

let dato: unknown;

dato = [];


// se è una stringa stampo in maiuscolo
if (typeof dato === 'string') {
  console.log(dato.toLocaleUpperCase())
} else if (typeof dato === 'number'){
console.log(dato * 2)
} else if(typeof dato === 'boolean'){
  console.log(dato? "si ": "no")
}  else {
  console.log("Dato non supportato")
}






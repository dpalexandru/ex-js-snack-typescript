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



// Snack 2 
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[];
  contratto: "determinato" | "freelance" | "indeterminato",
  readonly email: "string"
}

//  Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

// Developer
// livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
// linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
// certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
// ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
// budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
// stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).


type Developer = Dipendente & {
  livelloEsperienza: "jr" | "senior" |"middle",
  linguaggi?: string[],
  certificazioni?: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[] 
}

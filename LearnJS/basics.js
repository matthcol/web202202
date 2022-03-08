/* oldschool variable */
var x = 1;

/* modern variables */
let y = 1;
const z = 2;

/* 
    math : + - * / % (modulo)  ** (puissance)
    affection : = += -= ... ++ --
    operators de comparaisons : == === != !== < <= > >= 
    combinaison logiques :  ! (not),  || (or),    && (and)
*/


/* textes */
let texte = "Coucou";
texte = 'bonjour'
texte = `valeur de x = ${x+1}`

const villes = ["Pau", "Arbus", "Abos"]
villes.push("Bayonne")
villes.slice(2,4)

for (let v of villes) {
    console.log(v)
}

for (let i=0; i<villes.length; i++){
    console.log(villes[i])
}

villes.sort((v1,v2) => v1.toUpperCase().localeCompare(v2.toUpperCase()))

function maj(texte) {
    return texte.toUpperCase()
}

// Tri ou recherche en fonction de la locale
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator

const compFr = new Intl.Collator('fr_FR').compare
const compEs = new Intl.Collator('es_ES').compare

words_fr = [ "été", "étage", "étuve" ]
words_es = [ "mañana", "mano", "matador" ]

words_fr.sort()
// (3) ['étage', 'étuve', 'été']
words_fr.sort(compFr)
// (3) ['étage', 'été', 'étuve']
words_es = [ "mañana", "mano", "matador" ]
// (3) ['mañana', 'mano', 'matador']
words_es.sort()
// (3) ['mano', 'matador', 'mañana']
words_es.sort(compFr)
// (3) ['mañana', 'mano', 'matador']
words_es.sort(compEs)
// (3) ['mano', 'mañana', 'matador']

villes.map(maj)
    .map(v => v.slice(0,3))

villes.map(maj)
    .map(v => v.slice(0,3))
    .filter(v => v.startsWith("A")) 

villes.forEach(v => console.log(v))

villes.forEach((v,i) => console.log(v,i))

/* unpack du tableau pour passer ses elements en arguments de la fonction min */
Math.min(...villes.map(v => v.length))

villes.map(v => v.length)
    .reduce((l1,l2) => l1+l2)

/* avec valeur initiale, bien si tableau vide */    
villes.map(v => v.length)
    .reduce((l1,l2) => l1+l2, 0)

const ville_o = {
    name: "Pau",
    cp: "64000",
    pop: 77000
}

// dates : type Date (année, mois, jour, heure, minute, seconde, millisec)
// liste de librairies alternatives : https://www.skypack.dev/blog/2021/02/the-best-javascript-date-libraries/

// 29  février 2020 (mois numéroté à partir de 0) 
const d = new Date(2020,1,29);

d.toString()
// 'Sat Feb 29 2020 00:00:00 GMT+0100 (heure normale d’Europe centrale)'

d.getDay() // 6 : jour de la semaine
d.getDate() // 29 : jour du mois
d.getFullYear() // 2020 : année sur 4 chiffres
d.getYear() // 120 : année sur "2" chiffres ;)
d.getMonth() // 1 : mois mais numéroté à partir de 0

// formattage de date (10 formats en preset)
d.toLocaleString() // '07/03/2022, 10:01:59'
d.toLocaleDateString() // '07/03/2022'
d.toLocaleTimeString() // '10:01:59'


// Le nombre de millisecondes écoulées depuis le premier janvier 1970 à minuit UTC.
Date.now() // 1645875014577

// obtenir la date du jour !!!
d.setTime(Date.now())


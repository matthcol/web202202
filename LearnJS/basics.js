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

$("#panneau")
S.fn.init [img#panneau]
$("#panneau").css("display","none")
S.fn.init [img#panneau]
$("#panneau").show()
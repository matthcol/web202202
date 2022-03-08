// fonction nommée
function f(x, y){
    console.log(y)
    return x + (y==undefined ? 0 : y) + 1;
}

f()
f(3)
f(3,4)

const nbs = [1,2,3];

// appliquer f avec ses arguments extraits du tableau
const res = f(...nbs)

//appliquer f sur chaque element du tableau
const results = nbs.map(f) 

const results2 = nbs.map(function(x){
    return x+1
})

const results3 = nbs.map(x => x+1)

nbs.forEach(function(x){
    console.log(x+1)
})

nbs.forEach(x => console.log(x+1))

function dateNow() {
    const d = new Date()
    // d.setTime(Date.now())
    return d
}


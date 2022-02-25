const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const villes = [
    {
      id: 1,
      name: "Pau",
      cp: "64000",
      pop: 77000
    },
    {
      id: 2,
      name: "Abos",
      cp: "64005",
      pop: 535
    },
    {
      id: 3,
      name: "Arbus",
      cp:"64230",
      pop: 1169
    },
   ];

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/villes", (req,res) => {
   res.json(villes);
  });

app.post("/villes", (req,res) =>{
   const ville = req.body;
   const id = Math.max(...villes.map(v=>v.id)) + 1;
   ville.id = id;
   villes.push(ville);
   console.log("Ville ajoutée:", ville); 
   res.json(ville); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
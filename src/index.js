// Agregar el "type": "module", en el package.json. Importante para que ande el import ES6
import app from "./app.js" // Separe la configuracion en el app.js. 
// Notar que hay que poner la extension ".js" xq sino no anda (tema del import != require).

app.listen(3000);
console.log("Server running on port 3000");
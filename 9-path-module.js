const path = require('path');


console.log(path.sep);
//forma el path con los parametros establecidos
const filePath = path.join('/content', 'subcontent', 'texto.txt');

console.log(filePath);

//devuelve el ultimo parametro del path 
const base = path.basename(filePath);
console.log(base);
//devuelve la ruta absoluta del archivo texto.txt
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'text.txt');
console.log(absolute);
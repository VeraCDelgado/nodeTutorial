// const createReadStream = require('fs');
let http = require('http');
let fs = require('fs');
//creates data in chunks es utilizado para leer archivos grandes
const server = http
    .createServer(function(req, res) {

        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
    })

server.listen(5000);
// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.end('Welcome to our home page');

//     } else if (req.url === '/about') {

//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }

//     } else {
//         res.end(`
//             <h1>Oops!</h1>
//             <p> We can't seem to find the page you are looking for</p>
//             <a href= "/">back home</a>
//         `);
//     }
// })

// server.listen(5000, () => {
//     console.log('Server listening on port : 5000....');
// });
// const { get } = require("lodash");
const { readFile, writeFile } = require('fs').promises;
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//         return new Promise((resolve, reject) => {
//             readFile(path, 'utf8', (err, data) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(data);
//                 }
//             })
//         })
//     }
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


const start = async() => {
    try {

        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-granade.txt', `THIS IS AWESOME : ${first} ${second}`)
        console.log(first, second);

    } catch (error) {
        console.log(error)
    }
}


start();
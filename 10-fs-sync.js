const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log('done with this task');
writeFileSync('./content/11-result-sync.txt', `Here is the
result ${first}, ${second}`, { flag: 'a' });
console.log('starting a new task');
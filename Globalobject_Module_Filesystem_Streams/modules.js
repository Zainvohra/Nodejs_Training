// we might want to split our code in different multiple files and then import and export things from that files 

const xyz = require('./people')
console.log(xyz.people, xyz.ages)

const os = require('os')
console.log(os.platform(), os.homedir())
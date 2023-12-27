const fs = require('fs')

const readStream = fs.createReadStream('./docs/blogs1.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream('./docs/blogs2.txt')

// readStream.on('data', (chunk) => {
//     console.log('------------New Chunk-------')
//     console.log(chunk)
//     writeStream.write('\n New CHunK \n')
//     writeStream.write(chunk)
// })


//piping

readStream.pipe(writeStream); // same work AS THE ABOVE CODE
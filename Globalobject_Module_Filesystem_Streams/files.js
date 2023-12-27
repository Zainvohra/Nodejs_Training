const fs = require('fs')

// reading files

// fs.readFile('./docs/blogs.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())

// })


// this was asynchronus and it take some time to run 
// and it doesnt block our code which means its not going to stop the code from carring on down 
// and executing all the lines for e.g
// console.log('last line') //this print before blogs.txt 


// write files
// fs.writeFile('./docs/blogs.txt', 'hellow , world', () => {
//     console.log('file was written')

// })

// directories
// if (!fs.existsSync('./assets')) { // checking if asset folder doesnt exists then it make it

//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("folder created")
//     })
// } else {
//     fs.rmdir('./assets', (err) => { // remove dir if exist
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }


// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("deleted")
    })
}
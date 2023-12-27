const express = require('express') //return us function
const morgan = require('morgan')

// express app
const app = express()

//listen for req

app.listen(3000);


// Middleware
// app.use((req, res, next) => {
//     console.log("new req made")
//     console.log("host", req.hostname);
//     next()

// })


//third party middleware

app.use(morgan('dev'));



// middleware and startic files means public file like images and style.css
app.use(express.static('public'))
// anything in public folder will be accessible now




app.get('/', (req, res) => {
    // res.send('<p>Hello<p>')
    res.sendFile('./Views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./Views/about.html', { root: __dirname })
    // res.send('<p>about<p>')
})

// redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./Views/404.html', { root: __dirname })

})
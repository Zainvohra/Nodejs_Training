const express = require('express') //return us function


// express app
const app = express()


// register view engine
app.set('view engine', 'ejs')





//listen for req

app.listen(3000);

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
    res.sendFile('./Views/404.html', { root: __dirname })

})
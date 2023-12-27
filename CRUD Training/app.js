const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')
// express app
const app = express();


// connect to mongo db
const dbURI = "mongodb+srv://zain:Mfcr6808405@cluster0.aob8h8k.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI)
    .then((result) => app.listen(9000)) // listen for requests
    .catch((err) => console.log(err))

//middlesware to catch data from form in post req

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New blog2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

//get all blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})


// get blog by id
app.get('/single-blog', (req, res) => {
    Blog.findById("6576ff1eb5ce73469007e58e")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //-1 descending order newest to oldest
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })

        })
        .catch((err) => {
            console.log(err)
        })

})

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs });
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});


//post req
app.post('/blogs', (req, res) => {
    console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        }))
        .catch((err) => {
            console.log(err)
        })
})
// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
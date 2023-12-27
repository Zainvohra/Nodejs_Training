const http = require('http')
const fs = require('fs')

// the call back function gonna run everytime a request comes in to our server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method,)

    //set header content type
    //three steps 
    //1- setting the header for content type being sent back to the browser
    //2- then we r writing whatever content we want to send back to thebrowser
    //3- then ending the response which send to the browser
    // res.setHeader('Content-Type', 'text/plain');


    // res.write('hello , ninjas');
    // res.end();



    // res.setHeader('Content-Type', 'text/html');


    // res.write('<p>hello ninjas html</p>');
    // res.end();



    // send an html file
    res.setHeader('Content-Type', 'text/html')

    let path = './Views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/aboutme':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            // return
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.statusCode = 200
            res.write(data)
            res.end()
        }
    })

})

// req object contains req type such as get post and contain info about url

server.listen(3000, 'localhost', () => {
    // this callback function fire when we start listening
    console.log('listening for request on port 3000')
})
//LOCAL HOST
// localhost is like a domain name like google.com
// but this one take us to very specific ip address called loop back
// 127.0.0.1 it points directly to our own computer
// so hostname localhost mean listen for req coming to our own computer

//Port Number
//port number are like doors through which internet communications can be made 
//between different programs

//Now our server also need port number to communicate through

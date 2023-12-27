const add = (a, b) => {
    return a + b
}

const err = () => {
    throw new Error('I am new error')
}

const promiseTest = (a, b) => {

    return new Promise((resolve, reject) => {
        if (a - b > 0) {
            resolve('+ve')
        }
        else {
            reject('-ve')
        }
    })

}

const express = require('express')
const app = express()
app.get('/users', (req, res) => {
    res.status(200).json({
        user: [
            {
                name: 'Zain vohra',
                email: 'zainvohra05@gmail.com',
                password: 'zain'
            }
        ]
    })
})

app.listen(3000)


module.exports = {
    add,
    err,
    promiseTest,
    app
}
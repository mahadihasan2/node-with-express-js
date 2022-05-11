const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Look mama i can do node now ! I am Happy! to say!to Hello!to come');
})

const users = [
    { id: 1, name: "Rakib", email: "rakib2@gmail.com", phone: "0173333333" },
    { id: 2, name: "Jibon", email: "jibon2@gmail.com", phone: "0173333333" },
    { id: 3, name: "Jobaidul", email: "jobaidul2@gmail.com", phone: "0173333333" },
    { id: 4, name: "Kalam", email: "kalam2@gmail.com", phone: "0173333333" },
    { id: 5, name: "Tosif", email: "tosif2@gmail.com", phone: "0173333333" },
    { id: 6, name: "Shakib", email: "shakib2@gmail.com", phone: "0173333333" },
    { id: 7, name: "Mahadi", email: "mahadi2@gmail.com", phone: "0173333333" },
]

app.get('/users', (req, res) => {
    // console.log("query", req.query)
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase()
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)

    } else {
        res.send(users)
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)

})

app.listen(port, () => {
    console.log('Listen to port', port);
})
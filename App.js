// the porpose of this project is to use branches, tags, and releases

const express = require('express')
const app = express()
// simple hello word node app
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello to deshawn and the rest of the world out there!')
}); app.listen(APP_PORT, () => {
    console.log(`running app at port:${APP_PORT}`)
})
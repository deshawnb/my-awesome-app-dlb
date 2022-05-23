const express = require('express')
const app = express()
// simple hello word node app
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('hello deshawn! Nice to see you!')
}); app.listen(APP_PORT, () => {
    console.log(`running app at port:${APP_PORT}`)
})
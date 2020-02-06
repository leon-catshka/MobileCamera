const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    console.log('Request to / received.')
    res.sendFile(__dirname+'/index.html')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
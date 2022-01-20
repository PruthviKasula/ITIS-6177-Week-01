const express = require('express')
const func = express()
const port = 3000

func.get('/', (request, response) => {
  response.send('Hello World!')
})

func.listen(port, () => {
  console.log(`Server is running and listening at http://localhost:${port}`)
})
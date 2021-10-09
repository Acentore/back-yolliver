const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.json({
    nome: "Fernando",
    idade: 28
  })
})

app.listen(3001, () => {
  console.log('Rodando');
})
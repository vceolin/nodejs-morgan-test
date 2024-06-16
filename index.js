const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

// Configurando o Morgan para logar as requisições no console
app.use(morgan('dev'))

// Middleware para interpretar requisições com corpo em JSON
app.use(express.json())

// Rotas de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!')
})

app.post('/dados', (req, res) => {
  const dados = req.body
  res.send(`Você enviou: ${JSON.stringify(dados)}`)
})

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

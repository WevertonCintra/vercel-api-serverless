import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
  return response.status(200).json({ message: 'Hello World' })
})

app.listen(
  {
    host: '0.0.0.0',
    port
  },
  () => {
    console.log(`🚀 HTTP Server Started on Port ${port}`)
  }
)

import app from './src/app.js'
const port = process.env.PORT || 3010;
const host = '0.0.0.0';



app.listen(port, () => {
    console.log(`Servidor escutando em http://${host}:${port}`)
  })
const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
  //  res.send('hola a todos')
   res.render('index.html')

})

app.get('/prueba',(req,res)=>{
    res.send('HOLA A TODOS NUEVA BRANCH ')
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log('servidior iniciado puerto 8080')
})
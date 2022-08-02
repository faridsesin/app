const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send('hola a todos')
   // res.render('index.html')

})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log('servidior iniciado puerto 8080')
})
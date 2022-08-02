const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send('hola a todos')
   // res.render('index.html')

})


app.listen(8080,()=>{
    console.log('servidior iniciado puerto 8080')
})
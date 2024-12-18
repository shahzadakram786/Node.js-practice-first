const express = require('express')
const app  = express()
const Port = 2000;

app.get('/',(req, res)=>{
    res.send("hello world this is home page")
})




app.listen(Port,()=>{
    console.log(`server is rinnig in https://localhost:${Port}`)
})



//instantiation
//import express

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5069

//REQUEST - RESPONSE
app.get('/juandelacruzAPI/',  (req, res) => {
    
    //SEND A MESSAGE TO THE API
    // USING SEND
    res.send("<H1> Hello World </H1>")

})

app.listen(5069, () => {
  console.log(`Server is running in port ${PORT}`)  
})
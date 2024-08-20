//import express module
var express=require('express')


var app=express()
var port=9000;


app.get('/',(req,res)=>{
    res.send("<h1>hello world</h1>")
})



app.listen(port,()=>{
    console.log('server running')
})
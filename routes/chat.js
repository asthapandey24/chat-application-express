const express = require('express')

const fs = require('fs')

 const router = express.Router()

router.get("/",(req,res)=>{
       fs.readFile("message.txt", (err, data)=>{
       if(err){
        console.log(err)
        data = "no data exist"
       }
        res.send(`
        ${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
        method="post">
        <input id="message" name="message" type="text" placeHolder="message">
       <input type="hidden" name="username" id="username">
       <button type="submit">Send</button></form>  
       `)
       })
 
 
  })
 
//  // app.use('/',(req, res, next)=>{
       
//  // })
    
 router.post("/", (req, res, next)=>{

  console.log(req.body.username)
  console.log(req.body.message)
  
   fs.writeFile('message.txt' ,`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err? console.log(err):res.redirect('/')
    )
 }) 



  module.exports = router
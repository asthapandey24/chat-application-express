 const express = require('express');
 const bodyParser = require('body-parser');



 const app = express()

 const chatRoutes = require('./routes/chat.js')
 const loginRoutes = require('./routes/log.js')


 app.use(bodyParser.urlencoded({extended : false}))



  app.use('/',chatRoutes)
  app.use('/',loginRoutes)



  app.use("/:universalURL ", (req, res) => {
   res.send('<h1>404 URL NOT FOUND</h1>')
 })


  app.listen(7000)







   

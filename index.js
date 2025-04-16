const express = require('express')
const fs = require("fs")
const app = express()
const port = 8000

app.get('/', (req, res) => {  
  fs.readFile("/etc/hostname", "utf8", (err,data) => {
    if (err) {
      console.log("err", err)
      res.send(500)
      return
    }
    res.send(`Application: ${process.env.NODE_APP_SERVICE || "unknown"}, Instance ${data.trim()}`)    
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
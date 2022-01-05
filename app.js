const express = require('express')
const app = express()
const port = 4000

const cp = require('child_process');


app.get('/hello', (req, res) => {
  name = req.query.name;

  console.log("Starting hello_world.sh " + name)

  cp.exec('sh hello_world.sh ' + name, function(err, stdout, stderr) {
      console.log("stdout:" + stdout)
      res.status(200).send(stdout);
  });

  console.log("Ending hello_world.sh")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




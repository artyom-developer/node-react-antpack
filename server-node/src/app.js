const express = require('express');
const app = express();
 
app.set('port', process.env.PORT || 3000);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({
      "message": "Hello world"
    });
});

// starting the servers
app.listen(app.get('port'),()=>{
  console.log('Server on port 3000');
});

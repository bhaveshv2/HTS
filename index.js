const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

const db = require('./config/mongoose');

app.use(express.json()); 
app.use(               
  express.urlencoded({
    extended: true,
  })
);  

// use express router
app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${PORT}`);
});
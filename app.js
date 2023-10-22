const express = require('express');


const app = express();

app.use(express.static('job'));

app.listen(3000,()=>{
    console.log("App Run on server in 3000");
})
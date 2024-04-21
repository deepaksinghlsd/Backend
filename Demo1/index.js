const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT,(request , response)=> {
console.log(`This server is runnig at ${PORT}`);
})

app.get('/', (request , response)=>{
    response.send("Sonali $ ramprabesh")

})


app.post('/' , (req , res)=> {
    res.send("Data posted");
    console.log(req)
})
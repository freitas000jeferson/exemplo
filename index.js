const express = require('express');
const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
});

app.use('/',router);
app.listen(3000,()=>console.log('Servidor Rodando'));
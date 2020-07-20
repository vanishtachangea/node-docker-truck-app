const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/mongoose');
//const User = require('./models/user');
const userRouter = require('./routers/user');
const truckRouter = require('./routers/truck');
const truckTypeRouter = require('./routers/truckType');
const truckLocationRouter = require('./routers/truckLocation');


app.use(express.json())
app.use(userRouter);
app.use(truckRouter);
app.use(truckTypeRouter);
app.use(truckLocationRouter);
/*
const router = new express.Router()
router.get('/test',(req,res)=>{
    res.send("this is another route0");
})
app.use(router);
*/

/*
app.post('/users',(req,res)=>{
    console.log(req.body);
    
    const user = new User(req.body);
    user.save().then(()=>{
        res.status(201).send(user);

    }).catch((error)=>{
        res.status(400);
        res.send("Failed: " +error);
    })

})
*/


app.listen(port, ()=>{
    console.log('server is up on port ', port);
})
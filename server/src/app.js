const express = require('express');
const app = express();
require('./db/mongoose');

const userRouter = require('./routers/user');
const truckRouter = require('./routers/truck');
const truckTypeRouter = require('./routers/truckType');
const truckLocationRouter = require('./routers/truckLocation');

app.use(express.json())
app.use(userRouter);
app.use(truckRouter);
app.use(truckTypeRouter);
app.use(truckLocationRouter);


module.exports = app;
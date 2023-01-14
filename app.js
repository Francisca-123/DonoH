const express = require('express')
const app = express();
const db = require("./DB/user")
const user_router = require("./routes/users")
const payment_router = require("./routes/payment")
const withdraw_router = require("./routes/withdrawal")

// import user_router from '../routes/users.js';
// import payment_router from '../routes/payment.js'
// import withdraw_router from '../routes/withdrawal.js';
// import db from './DB/user.js'

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const port = 3553;

app.use('/users', user_router)
app.use('/payment', payment_router )
app.use('withdraw', withdraw_router)
app.listen(process.env.port || port, ()=> {


    console.log(`Server listening at port ${port}`);
});
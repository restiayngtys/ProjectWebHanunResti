require('dotenv').config()
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const RouteUser     = require('./routes/User');
const mongoose      = require('mongoose');
const cors          = require('cors');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(res => {
    console.log('Database Terhubung')
})
.catch(e => {
    console.log('Database Error')
})
app.use(cors());
app.use(bodyParser.json());
app.use('/', RouteUser)

app.listen(process.env.PORT, (req,res) =>{
    console.log(`Server Run Port ${process.env.PORT}`)

})
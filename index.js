const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userRouter = require('./router/user')

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

mongoose.connect(process.env.MONGODB_URL,
{useUnifiedTopology: true,
    useNewUrlParser: true
}
)
    .then(()=>{
        console.log('Mongo db connect');
    }).catch(e=>console.log(e))

app.listen(port, ()=>{
    console.log('API runs on port ', port);
})
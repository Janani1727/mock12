const express = require('express')

const app = express()
const {connection}=require("./db")

app.use(express.json())
const {userRouter} =require("./routes/userRoute")
const {calculateRouter} =require("./routes/calculateRoute")

app.get('/', (req, res) => {
    res.send('Hello!')
})
app.use("/users",userRouter)

app.use("/calculate",calculateRouter)


app.listen('8080', async(req, res) => {
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running!')
})
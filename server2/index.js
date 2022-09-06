import express from "express";

const app = express()


// routes
app.use('/',  (req,res)=> {
    res.json({
        "msg": "Hello World"
    })
})


app.listen(5000, ()=> {
    
    console.log("sever is running")
})

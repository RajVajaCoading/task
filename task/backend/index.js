const express = require('express')
const app = express()
require('./db/config')
const user = require('./db/userScema')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/user',async(req,res)=>{
        const data = await user.find()
        res.send(data)
})

app.get('/users/:id',async(req,res)=>{
    const data = await user.findById({_id:req.params.id})
    res.send(data)
})

app.post('/register',async(req,res)=>{
    console.log(req.body)
    const data = await new user(req.body)
    const result = await data.save()
    res.send(result)
})

app.put("/user/:id",async(req,res)=>{
    const data = await user.updateOne({_id:req.params.id},{$set:req.body})

    if(data){
        res.send(data)
    }else{
        res.send({result:"not update"})
    }
})

app.delete('/delete-user/:id',async(req,res)=>{
    const data = await user.deleteOne({_id:req.params.id})
    res.send(data)

})
app.listen(5000)
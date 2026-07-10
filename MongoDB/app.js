const express = require('express')
const app = express()

const userModel = require('./usermodel')

app.get('/' , (req,res)=>{ 
    res.send('hello')
})

app.get('/create' , async(req,res)=>{ 
    let created = await userModel.create({
        name: 'harsh',
        username: "Hasrh",
        email: "harsh@gmail.com"
        
    })

    res.send(created)
})

app.get('/update' , async(req,res)=>{ 
    
    //userModel.findOneAndUpdate(findone, update , {new:true})

    let updateduser = await userModel.findOneAndUpdate({name : "harsh"} , {name: "hash vandana"} , {returnDocument: "after"});

    res.send(updateduser)
})

app.get('/read' , async (req,res) => {
    //let user = await userModel.find()//to retrieve all data

    let user = await userModel.find({name : 'harsh'})//to retireve particular data
    res.send(user)
})

app.get('/delete' , async (req,res) => {
    //let user = await userModel.find()//to retrieve all data

    let user = await userModel.findOneAndDelete({name : 'harsh'})
    res.send(user)
})

app.listen(3000 , (err)=>{
   if(!err)
       console.log("Server started")
    
})
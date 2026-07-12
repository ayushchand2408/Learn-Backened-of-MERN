const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


app.use(cookieParser())
app.get('/' ,  async(req,res)=>{
    // res.cookie("name", "harsh");//to set cookie and cookie is stored till whole browser is open
    // res.send("done");

    //to encypt the given password
    const user = await bcrypt.genSalt(10, async function(err,salt){
         console.log(salt)
        await bcrypt.hash("polpolp" , salt , function(err,hash){
            console.log(hash)
        })
    })
    console.log(user)

    //to compare with existing password 
    // bcrypt.compare("polpolp" , "$2b$10$DVnpUZXQWmHkEQh8VVxGlemY3.SVQewVlff/wwcey6QbC4KRaS/ry" , function(err,result){
    //     console.log(result);
    // })
    console.log("hi")

    res.send("hey");
})

app.get('/create' , (req,res)=>{
    console.log(req.cookies)//to read cookie
    res.send("create");
})



app.listen(3000);
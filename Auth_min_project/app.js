const express = require("express")
const app = express()
const userModel = require("./Model/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const cookieParser = require('cookie-parser')
const path = require('path')

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({ extened: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , (req,res)=>{
    res.render("index")
})

app.post("/create" , async (req,res)=>{
    let {username , email , password , age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password , salt , async (err,hash) => {
            if(err) console.error(err)
            let createduser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            
            let token = jwt.sign({email: email} , "shhhhhhhh");
            res.cookie("token" , token);
            res.send(createduser)
        })
    })
})

app.get('/login' , (req,res)=>{
    res.render('login')
})

app.post("/login" ,  async (req,res)=>{
    let user = await userModel.findOne({email: req.body.email});

    if(!user){
        res.send("something went wrong");
    }
    bcrypt.compare(req.body.password , user.password , (err,result)=>{
        if(result){
            let token = jwt.sign({email: user.email} , "shhhhhhhh");
            res.cookie("token" , token);
            res.send("You are Loged in ")
        }
        else
            res.send("something is wrong");
    })
    

})

app.get("/logout" , function(req,res){
    res.cookie("token", "");
    res.redirect('/')
})

app.get('/delete' , async (req,res)=>{
    let user = await userModel.find({username : "Ayush"}) 

    console.log(user);
    res.send("done")
})


app.listen(3000)
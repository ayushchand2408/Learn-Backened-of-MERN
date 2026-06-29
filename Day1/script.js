// to Learn about more file system code go to https://nodejs.org/docs/latest/api/fs.html

const fs = require('fs');

fs.appendFile("hey.txt","hey hello kaise ho",function(err){
    if(err){
        console.error(err)
    }else{
        console.log("done")
    }
})

fs.rename("hey.txt","hello.txt", function(err){
    if(err) console.error(err)
    else console.log('done')
})

fs.copyFile("hello.txt","./copy/copy.txt",function(err){
    if(err) console.error(err)
    else console.log('done')
})

fs.unlink("remove.txt",function(err){
    if(err) console.error(err)
    else console.log('done')
})

fs.rm("./copy1",{recursive: true},function(err){
    if(err) console.error(err)
    else console.log('done')
})



fs.readFile('hello.txt' , 'utf8',(err,data) => {
    if(err) console.error(err)
    else console.log(data)
})
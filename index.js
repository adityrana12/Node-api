const express=require("express")
const users=require("./MockData.json")
const app=express()
const port=8000
app.get("/users",(req,res)=>{
    return res.json(users)
})
app.get("/students",(req,res)=>{
    return res.json(users)
})
app.get("/teachers",
    (req,res)=>{
        return res.json(users)
    })
app.get("/faculty",(req,res)=>{
    return res.json(users)
})
app.get("/watches",(req,res)=>{
    return res.json(users)
})

app.get("/balls",(req,res)=>{
    return res.json(users)
})
app.listen(port,()=>console.log("server is running"))
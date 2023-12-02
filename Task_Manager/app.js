import express from "express"

const app = express();
const port = 5000;

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hie im listening")
})

app.listen(port,()=>{
    console.log(`Server is listening to post ${port}`)
})
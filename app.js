const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const registrationrouter=require("./controllers/registrationrouter")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishnadasm:toby1234@krishnadas.rrihwpp.mongodb.net/resumeDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true})

app.use("/api/resume",registrationrouter)


app.listen(2005,()=>{
    console.log("server running")
})

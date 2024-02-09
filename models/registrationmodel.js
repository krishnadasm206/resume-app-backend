const mongoose=require("mongoose")

const registrationschema=new mongoose.Schema(
    {
       name:String,
       mobileNo:String,
       address:String,
       email:String,
       password:String
    }
)

module.exports=mongoose.model("registration",registrationschema)




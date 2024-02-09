const express = require("express")
const registrationmodel = require("../models/registrationmodel")

const router = express.Router()

const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/registration", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    

    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let user=new registrationmodel(data)
            let result=await user.save()
            res.json({
                status:"success"
            })


})



module.exports = router
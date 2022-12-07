const express = require('express')
const router = express.Router()
const User = require('../models/user')






// API for when user wishes to join as host  .
// Eg request : POST http://localhost:9000/hostsignup/



router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({_id:req.body.userId})
        console.log("User fetched with id : " + req.body.userId)
        console.log(user.password)
        user.isHost= true
        await user.save()
        console.log("User updated with id : " + req.body.userId);
        res.status(200).json({isHost:"true"})  
      
      } catch (err) {
        res.status(404).json({message:"No user found with id : " + req.body.userId})
      }
})



module.exports = router
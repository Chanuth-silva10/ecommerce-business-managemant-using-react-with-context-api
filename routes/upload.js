const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
//require('dotenv').config();

// we will upload image an cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// Upload image
router.post('/upload', (req, res) => {
    try{
        console.log(req.files)
        res.json('test upload')
    }catch(err){
        res.status(500).json({msg: err.message})
    }
})

module.exports = router
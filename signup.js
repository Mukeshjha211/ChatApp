// const express=require('express')
// const router=express.Router()
// const controller= require('../controller/signup')

// // signUp and Login route
// router.post('/user/signup',controller.signUp)
// router.post('/user/login',controller.isUser)

// module.exports=router


const express = require('express');

const router = express.Router()
const controller = require('../controller/signup')

//Signup...

router.post('/user/signup', controller.signup)

module.exports = router;


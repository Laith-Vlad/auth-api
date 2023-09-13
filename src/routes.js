const express = require("express")
const { user } = require("./model/user.model")
const bcrybt = require('bcrypt')
const signin = require("./middleware/signin")
const bearerCheck = require("./middleware/bearerCheck")
const checkCap = require("./middleware/checkCap")
const todo = require("./model/todo")


const  authRouter  = express.Router()



authRouter.get('/' , (req,res) =>{ 
     res.status(200).json({
          message : 'Home page'
     })
})


authRouter.get('/signup', (req, res) => {
     res.status(200).json({ message: 'sign up page'})
})
authRouter.post('/signup' ,async (req , res , next) =>{
     try{

          const {username , password , role} = req.body
          const passHach = await bcrybt.hash(password , 5)
          const createUser = await user.create({
               username:username,
               password :passHach,
               role : role  
          })
          res.status(201).json({
               user : createUser
          })
     }
     catch(err){
          // console.log(err)
          next('server error 500')
     }
})

authRouter.post('/signin', signin , (req,res) =>{
     res.status(200).json({
          message : req.ehab
     })
})

authRouter.get('/todo', async (req, res) => {
     const data = await todo.findAll()
     res.status(200).json({
          data
     })
})

authRouter.post('/todo', async (req, res) => {
     const body = req.body
     const data = await todo.create(body)
     res.status(201).json({
          data
     })
})

authRouter.put('/todo/:id', async (req, res) => {
     const id = req.params.id
     const body = req.body
     const data = await todo.update(body, {where:{id}} )
     res.status(202).json({
          data
     })
})

authRouter.delete('/todo/:id', async (req, res) => {
     const id = req.params.id
     const data = await todo.destroy({where:{id}})
     res.status(204).json({
          data
     })
})


authRouter.get('/order', bearerCheck , (req,res) =>{
     if(req.user){
          res.status(200).json({
               wc : 'welcome , you have the access ',
          })
     }
     else{
          res.status(200).json({
               message : 'no access'
          })
     }
} )
authRouter.post('/order', bearerCheck , checkCap('create'), (req,res) =>{
     if(req.user){

          res.status(200).json({
               wc : 'welcome , you have the access to create a contant '
          })
     }
     else{
          res.status(200).json({
               message : 'no access'
          })
     }
} )

authRouter.put('/order', bearerCheck , checkCap('update'), (req,res) =>{
     if(req.user){
          res.status(200).json({
               wc : 'welcome , you have the access to update a contant '
          })
     }
     else{
          res.status(200).json({
               message : 'no access'
          })
     }
} )

authRouter.delete('/order', bearerCheck , checkCap('delete'), (req,res) =>{
     if(req.user){
          res.status(200).json({
               wc : 'welcome , you have the access to delete a contant'
          })
     }
     else{
          res.status(200).json({
               message : 'no access'
          })
     }
})


module.exports = authRouter
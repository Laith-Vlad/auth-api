const base64 = require('base-64')
const { user } = require('../model/user.model')


module.exports = async (req , res , next) =>{
     const header = req.headers.authorization.split(" ").pop()
     
     if(header) {
          user.checkToken(header).then(data => {
               req.user = data
               next()
          }).catch(err => console.log('notoken' , err))
     }


     // else{
     //      next('no token')
     // }
} 
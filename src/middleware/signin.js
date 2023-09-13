const base64 = require('base-64')
const { user } = require('../model/user.model')


module.exports = async (req , res, next) =>{
     const header = req.headers.authorization.split(" ").pop()
     if(header){
          const [username , password] = base64.decode(header).split(":")
          // console.log(username , password , '66666666666666666666666666666');
          user.checkUSer(username , password).then(data => {
               req.ehab = data
               next()
          }).catch(err => console.log(err))

     }else{
          next('no header')
     }

}



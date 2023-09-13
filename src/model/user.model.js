const { userSequelize , DataTypes } = require(".");
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
require('dotenv').config()




const user = userSequelize.define('userACL' , {
     username :{
          type : DataTypes.STRING,
          allowNull : false
     },
     password :{
          type : DataTypes.STRING,
          allowNull : false
     },
     token : {
          type : DataTypes.VIRTUAL ,
          get (){
               return jwt.sign({username : this.username , password : this.password , role : this.role , capabilities : this.capabilities} , process.env.SECRET)
          }
     },
     role : {
          type : DataTypes.ENUM('user' , 'writer' , 'editor' , 'admin'),
          defaultValue : 'user'
     },
     capabilities : {
          type : DataTypes.VIRTUAL,
          get(){
               const acl = {
                    user : ['read'],
                    writer : ['read', 'create'],
                    editor : ['read', 'create','update'],
                    admin : ['read', 'create','update' , 'delete']
               }
               return acl[this.role]
          }
     }
})


user.checkUSer = async (username , password) => {
     const checkUser= await user.findOne({where:{username}})
     const checkPass = await bcrypt.compare(password, checkUser.password)
     console.log(checkPass);
     if(checkPass){
          // const signToken = jwt.sign({username : checkUser.username , password : checkUser.username} , process.env.SECRET)
          return {
               user : checkUser,
               // token : signToken
          }
     }else{
          throw new Error('checkUSer errooooor')
     }
}

user.checkToken = async (token) =>{
     const getToken = jwt.verify(token , process.env.SECRET)
     const checkUser = await user.findOne({where:{username : getToken.username}})
     if(checkUser.username){
          return checkUser
     }else{

          throw new Error (" checkToken error")
     }
}

module.exports = {
     user
}
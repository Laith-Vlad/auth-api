const { userSequelize , DataTypes } = require(".");

const clothesED = userSequelize.define('clothesTable1',{
     name : {
          type : DataTypes.STRING,
          allowNull : false
     },
     externalId :{
          type : DataTypes.INTEGER
     }

}) 

module.exports = clothesED
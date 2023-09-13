const { userSequelize , DataTypes} = require(".")


const todo = userSequelize.define('todo', {
     text: {
          type: DataTypes.STRING,
     },
     completed: {
          type : DataTypes.BOOLEAN
     },
     assignee: {
          type : DataTypes.STRING
     },
     difficulty: {
          type : DataTypes.INTEGER
     }
})

module.exports = todo
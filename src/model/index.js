const {Sequelize , DataTypes} = require('sequelize')

require('dotenv').config()

const postgres_url = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DB_URL 

const userSequelize = new Sequelize(postgres_url  , {})

module.exports ={
     userSequelize,
     DataTypes
}
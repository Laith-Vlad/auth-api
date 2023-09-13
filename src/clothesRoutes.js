
const express = require('express')
const router = express.Router()
// const { clothesCollection } = require('../models')
const clothesCollection = require('./model/clothes.modul')
const bearerCheck = require('./middleware/bearerCheck')
const checkCap = require('./middleware/checkCap')



router.get('/clothes' , bearerCheck, allClothes)
router.post('/clothes' ,bearerCheck,checkCap('create'), postClothes)
router.get('/clothes/:id' ,bearerCheck, oneClothe)
router.put('/clothes/:id' ,bearerCheck,checkCap('update'), updateClothe)
router.delete('/clothes/:id' ,bearerCheck,checkCap('delete'), delteteClothe)


async function allClothes(req,res){
     if(req.user){
     const allClothes = await clothesCollection.findAll()
     res.status(200).json(allClothes)
     }    
     else{
          res.status(200).json({
               message : 'you dont have the access '
          })

     }
}


async function postClothes(req,res){
     const {name , externalId} = req.body
     const postClothes = await clothesCollection.create({
          name : name,
          externalId : externalId
     })

     res.status(201).json(postClothes)
}


async function oneClothe(req,res){
     const id = req.params.id
     const oneClothe = await clothesCollection.findOne({where :{id}})

     res.status(200).json(oneClothe)
}

async function updateClothe(req,res){
     const body = req.body
     const id = req.params.id
     // const findOne = await closhes1.findOne({where : {id}})
     // const oneClothe = await clothesCollection.findOne({where :{id}})
     // let record = await oneClothe.update(body)
     const updatedPerson = await clothesCollection.update(body, { where: { id } })


     res.status(202).json(updatedPerson)
}

async function delteteClothe(req,res){
     const id = req.params.id
     const delteteClothe = await clothesCollection.destroy({where : {id}})
     res.status(204).json(delteteClothe)
}

module.exports = router ;
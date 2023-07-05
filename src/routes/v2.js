'use strict';

const express = require('express');
const { users } = require('../models/index');

const bearerAuth = require('../middleware/bearer');
const routerV2 = express.Router(); // Corrected: Router instead of routerV2
const dataModules = require('../models');
const modelsMiddleware = require('../middleware/modeler');
const acl = require('../middleware/acl');
routerV2.param('model', modelsMiddleware);

routerV2.get('/:model', bearerAuth, handleGetAll);
routerV2.get('/:model/:id', bearerAuth, handleGetOne);
routerV2.post('/:model', bearerAuth, acl('create'), handleCreate);
routerV2.put('/:model/:id', bearerAuth,  acl('update'), handleUpdate);
routerV2.delete('/:model/:id', bearerAuth,  acl('delete'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = routerV2;

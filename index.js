'use strict';

require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3001

async function startServer() {
  await db.sync({ force: true });
  server.start(PORT);
}

startServer();


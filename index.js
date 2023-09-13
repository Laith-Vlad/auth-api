const { userSequelize } = require("./src/model");
const { start } = require("./src/server");

userSequelize.sync({force : true}).then( () => {
     start()
}).catch(err => console.log('Main index' ))

// {force : true}

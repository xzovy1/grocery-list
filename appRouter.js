const {Router} = require('express');
const groceryController = require('./appController');
const groceryRouter = Router();

groceryRouter.get('/', groceryController.groceryListGet);

groceryRouter.post('/', groceryController.addItemPost)


module.exports = groceryRouter;
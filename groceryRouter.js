const {Router} = require('express');
const groceryController = require('./groceryController');
const groceryRouter = Router();

groceryRouter.get('/', groceryController.groceryListGet);

groceryRouter.post('/', groceryController.addItemPost);

groceryRouter.post('/delete', groceryController.removeItemPost);

module.exports = groceryRouter;

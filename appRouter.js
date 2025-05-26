const {Router} = require('express');
const controller = require('./appController');
const router = Router();

router.get('/', controller.groceryListGet);

router.post('/', controller.addItemPost)


module.exports = router;
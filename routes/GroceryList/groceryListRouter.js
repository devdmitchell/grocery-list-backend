const express = require('express')
const router = express.Router()
const groceryController = require('./controller/groceryController')


router.get('/get-all-groceries', groceryController.getAllGroceries)
router.post('/create-grocery', groceryController.createGrocery)
router.put('/update-grocery-by-id/:id', groceryController.updateGroceryById)
router.delete('/delete-grocery-by-id/:id', groceryController.deleteGroceryById)


module.exports = router
const express = require('express')
const shopItemController = require('../controllers/admin')

const router=express.Router()

router.get('/getAll',shopItemController.getAllShopItems)



module.exports=router
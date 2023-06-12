const mongoose= require('mongoose')

const shopItemSchema= mongoose.Schema({
    title:{type:String},
    imageUrl:{type:String},
    price:{type:Number},
    availableCount:{type:Number},
    category:{type:String},
})

const ShopItem =mongoose.model('ShopItem',shopItemSchema)

module.exports=ShopItem
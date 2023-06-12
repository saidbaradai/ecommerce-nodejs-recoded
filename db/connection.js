const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb://localhost/ecommerce')
    .then(()=>{console.log('connected')})
    .catch(()=>{console.log('not connected')})
}

module.exports=connectToDb
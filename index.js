const express=require('express')
const app=express()
const dbConnection=require('./db/connection')

const adminRoutes=require('./routes/admin')


app.use('/api/admin',adminRoutes)


app.listen(3001,()=>{
    console.log('server started at 3001');
    dbConnection()
    
})

app.get('/',(req,res)=>{
    res.send('Hi')
})
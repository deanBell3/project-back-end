const db= require('../data/data.js')
const router= require('express').Router()

router.get('/users/:username/profile',(req,res)=>{
    const username= req.params.username;
    db.select('username','email').from('elevate_users').where({username})
    .then(user=>res.send(user))
    .catch(err=>res.send(err))
})

router.post('/users/:username/delete-profile',(req,res)=>{
    const username= req.params.username;
    db('elevate_users').where({username}).del().then(()=>res.end('Account deleted perfectly')).catch(err=>res.send(err))
})

module.exports=router;
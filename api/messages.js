const db= require('../data/data.js')
const router = require('express').Router()

router.get('/messages',(req,res)=>{
    db.select('*').from('messages').orderBy('sent_the','desc').then(data=>res.send(data)).catch(err=>res.send(err))
})

router.post('/messages',(req,res)=>{
    const{name,email,content}=req.body
    db('messages').insert({name,email,content}).then(()=>{
        res.send('message sent thank you')
    }).catch(err=>res.send(err))
})

router.get('/message/:id',(req,res)=>{
    const {id}= req.params;
    db.select('*').from('messages').where({id}).then(data=>res.send(data)).catch(err=>res.send(err))
})

module.exports= router;
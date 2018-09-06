const db= require('../data/data.js')
const router = require('express').Router()

router.get('/messages',(req,res)=>{
    db.select('*').from('messages').orderBy('sent_the','desc').then(data=>res.send(data)).catch(err=>res.send(err))
})

router.post('/messages',(req,res)=>{
    const{name,email,content}=req.body
    db('messages').insert({name,email,content}).then(()=>{
        res.send({message:'Message sent thank you'})
    }).catch(()=>res.send({error:'Something went wrong try again'}))
})

router.get('/message/:id',(req,res)=>{
    const {id}= req.params;
    db.select('*').from('messages').where({id}).then(data=>res.send(data)).catch(err=>res.send(err))
})

module.exports= router;
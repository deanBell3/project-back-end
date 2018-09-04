const db= require('../data/data.js')
const router= require('express').Router()

router.get('/articles', (req,res)=>{
    db.select('*').from('articles').then(data=>res.send(data)).catch(err=>res.send(err))
})
router.post('/articles', (req,res)=>{
    const {headline, main_picture, picture_reference}= req.body
    db('articles').insert({headline, main_picture, picture_reference}).then(()=>{
        res.send('Article posted successfully')
    }).catch(err=>res.send(err))
})
// TEST ROUTES FOR INCORPORATION OF NEW STYLES
router.get('/article',(req,res)=>{
    db.select('*').from('article').then(data=>res.send(data)).catch(err=>res.send(err))
   })
 router.post('/articles',(req,res)=>{
     const {headline, main,reference}= req.body;
     db('article').insert({headline, main, reference})
     .then(()=>res.send('posted successfully'))
     .catch(err=>res.send(err))
})

// TEST ROUTES END 

router.get('/articles/:id',(req,res)=>{
   const article_id= req.params.id;
   db.select('*').from('articles').where({article_id}).then(data=>res.send(data)).catch(err=>res.send(err))
})
router.get('/articles/:id/paragraphs',(req,res)=>{
    const article= req.params.id;
    db.select('*').from('paragraph').where({article}).then(data=>res.send(data)).catch(err=>res.send(err))
})

router.post('/articles/:id/paragraphs',(req,res)=>{
    const{content}=req.body;
    const{id}= req.params;
    db('paragraph').insert({content,article:id}).then(()=>res.send('paragraph added successfully')).catch(err=>res.send(err))
})

module.exports= router;
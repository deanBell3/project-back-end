// dependencies requirements
const dotenv= require('dotenv')
dotenv.config()
const passport=require('passport')
const cors= require('cors');
const bodyParser= require('body-parser');
// Routes requirements
const articlesRoutes= require('./api/articles.js')
const messageRoutes= require('./api/messages.js')
//Express Requirement
const app= require('express')();
// Express uses 
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
//Express Routes
app.get('/', (req,res)=>{
    res.send('Welcome To Elevate :)...')
})
// articles routes
app.use(articlesRoutes)
//message routes
   app.use(messageRoutes)
// express server

app.listen(process.env.PORT, process.env.IP,()=>{
    console.log('Elevate is up and running...')
})
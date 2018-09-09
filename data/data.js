const knex= require('knex')({
    client:'pg',
    connection:{
        connectionString: process.env.DATABASE_URL,
        ssl:true
       /* host:'localhost',
        database:'elevate',
        user:'ubuntu',
        password:'dean'*/
        
    }
})

module.exports= knex;
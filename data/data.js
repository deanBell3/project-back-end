const knex= require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        database:'elevate',
        user:'ubuntu',
        password:'dean'
    }
})

module.exports= knex;
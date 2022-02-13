const express = require("express");
const route = new express.Router();
const db= require("../db/conn");


route.get("/",(req,res)=>{
res.redirect("/users");
})

route.get("/edit",(req,res)=>{
    res.render("edit");

})

route.get('/users',function (req, res) {
    const sql = `select * from user`;
    db.query(sql, function (err, rows, fields) {
        if (err) throw err;
        res.render('index',{Title:"Users", rows})
    })
});

route.get("/edit/:id",(req,res)=>{
    const id= req.params.id;
    const sql = `select * from user where id = ${id}`;
    db.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        res.render('edit', rows[0]);
    })

})


// user routes
route.get('/user',(req,res)=>{res.render('index')});




module.exports = route;
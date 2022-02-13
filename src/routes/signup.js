const express = require("express");
const route = new express.Router();
const db= require("../db/conn");

route.get("/signup",(req,res)=>{
res.render("signup");
})


route.post("/signup", (req, res) => {
    try {
        const First_name = req.body.firstName;
        const Last_name = req.body.lastName;
        const Birthddate = req.body.birthdayDate;
        const Gender = req.body.gender;
        const Email = req.body.email;
        const Phone_Number = req.body.phoneNumber;

        const sql = `insert into user (First_name, Last_name , Birthdate, Gender, Email, Phone_Number) 
         values ("${First_name}","${Last_name}","${Birthddate}","${Gender}","${Email}","${Phone_Number}")`;


         db.query(sql, function (err, result) { 
            if (err) {res.send("something bad happend")}
            res.redirect("/users");
        })

    } catch (error) {
        res.send(error);
    }
})

route.post("/user/edit/:id",(req,res)=>{
    try {
        const id= req.params.id;
        const First_name = req.body.firstName;
        const Last_name = req.body.lastName;
        const Birthddate = req.body.birthdayDate;
        const Gender = req.body.gender;
        const Email = req.body.email;
        const Phone_Number = req.body.phoneNumber;

        const sql = `update user set First_name="${First_name}", Last_name="${Last_name}",Birthdate="${Birthddate}",
        Gender="${Gender}",Email="${Email}",Phone_Number="${Phone_Number}" where id =${id}`;


         db.query(sql, function (err, result) { 
            if (err) {res.send("something bad happend")}
            res.redirect("/users");
        })

    } catch (error) {
        res.send(error);
    }
})

route.get("/delete/:id",(req,res)=>{
    const id= req.params.id;
    const sql = `delete from user where id = ${id}`;
    db.query(sql, function (err, result) { 
        if (err) {res.send("something bad happend")}
        res.redirect("/users");
    })
})


module.exports = route;
require("dotenv").config();
const express = require("express");
const app = express();
const hbs=require("hbs");
const path=require("path");
const userRoutes = require('./routes/user');
const signupRoutes = require("./routes/signup");
const db= require("./db/conn");
const port = process.env.PORT || 2000;

// path
const staticPath = path.join(__dirname,"./public");
const templatePath= path.join(__dirname,"./templates/views");
const partialPath= path.join(__dirname,"./templates/partials");
// static files
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// view engine
app.set("view engine", "hbs");
app.set('views',templatePath );
hbs.registerPartials(partialPath);

// routes
app.use("/", userRoutes);
app.use("/", signupRoutes);

// server
app.listen(port,()=>{ console.log(`server is listing at ${port}`)});
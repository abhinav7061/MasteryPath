const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const ErrorHandling = require("./middlewares/error");

dotenv.config({ path: './config.env' });  // To link the conn file for database connection purposes
app.use(express.json()); //middleware to understand json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const cors = require("cors");
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//importing routes
const user = require("./router/userRoutes");
const blog = require("./router/blogRoutes");

//using routes
app.use("/api/v1/user", user);
app.use("/api/v1/blog", blog);
app.use('/api/v1/blog-cover', express.static(__dirname + '/uploads/blog_cover')); // route to  serve the static file(profile image in this project)

//using error middlewares
app.use(ErrorHandling);

module.exports = app;

const express = require("express");
const app = express();
const port = process.env.PORT || 6700;
//we have given an environment var where it will rum...
// if env var is set use tht value else use 6700
//to tell app,where static files -html/css are stored in server
app.use(express.static("frontend"));//we'll store all rhe files in fronted folder
//the above line is telling express where the files are..
app.listen(port,function(){
    console.log("App running on http://localhost:"+port);
});
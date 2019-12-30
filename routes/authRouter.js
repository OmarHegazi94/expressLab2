let express = require("express");
let path = require("path");

let authRouter = express.Router();

// Login get
authRouter.get("/login",(request, response) => {
    response.sendFile(path.join(__dirname, "..","views", "login.html"));
});

// Login post
authRouter.post("/login",(request, response) => {
    console.log(request.query);
    // include body parser for this
    // change to request.body
    if(request.query.userName === "omar" && request.query.userPassword === 123){
        response.redirect("./admin");
    } else {
        response.redirect("./login");
    }
});

// Register get
authRouter.get("/register",(request, response) => {
    response.sendFile(path.join(__dirname, "..","views", "register.html"));
});

// Register post
authRouter.post("/register",(request, response) => {
    
});


module.exports = authRouter;
